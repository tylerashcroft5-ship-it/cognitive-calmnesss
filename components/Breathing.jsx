"use client";

import { useEffect, useRef, useState } from "react";

/*
  The signature interaction. A guided breath:
  inhale 4s → hold 4s → exhale 6s, ring and halo scale in sync.
  Respects prefers-reduced-motion (text guidance only, no scaling).
*/

const PHASES = [
  { label: "Breathe in",  secs: 4, scale: 1.32 },
  { label: "Hold",        secs: 4, scale: 1.32 },
  { label: "Breathe out", secs: 6, scale: 1.0 },
];

export default function Breathing() {
  const [running, setRunning] = useState(false);
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [count, setCount] = useState(PHASES[0].secs);
  const [reduced, setReduced] = useState(false);
  const timers = useRef([]);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  useEffect(() => {
    if (!running) { clearTimers(); return; }

    let idx = phaseIdx;
    const runPhase = (i) => {
      setPhaseIdx(i);
      const phase = PHASES[i];
      setCount(phase.secs);
      // tick the countdown each second
      for (let s = 1; s <= phase.secs; s++) {
        timers.current.push(setTimeout(() => setCount(phase.secs - s || ""), s * 1000));
      }
      timers.current.push(
        setTimeout(() => runPhase((i + 1) % PHASES.length), phase.secs * 1000)
      );
    };
    runPhase(idx);
    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const phase = PHASES[phaseIdx];
  const scale = running && !reduced ? phase.scale : 1;
  const dur = `${phase.secs}s`;

  const toggle = () => {
    if (running) {
      setRunning(false);
      setPhaseIdx(0);
      setCount(PHASES[0].secs);
    } else {
      setPhaseIdx(0);
      setRunning(true);
    }
  };

  return (
    <div className="breathe__stage" role="group" aria-label="Guided breathing exercise">
      <div
        className="breathe__halo"
        style={{ "--scale": scale, "--phase-dur": dur }}
        aria-hidden="true"
      />
      <div
        className="breathe__ring"
        style={{ "--scale": scale, "--phase-dur": dur }}
        aria-hidden="true"
      />
      <div className="breathe__core" aria-live="polite">
        <span className="breathe__phase">{running ? phase.label : "Ready?"}</span>
        <span className="breathe__count">{running ? count : ""}</span>
      </div>

      <div className="breathe__controls" style={{ position: "absolute", bottom: "-4.6rem", left: 0, right: 0 }}>
        <button className="btn btn--ghost" onClick={toggle}>
          {running ? "Pause" : "Begin"}
        </button>
      </div>
    </div>
  );
}
