// HelpDesk — Tenant Admin Portal
// Auto-assembled from the Claude Design handoff bundle (tenant.html sources),
// precompiled by Vite instead of in-browser Babel. Source order matches index.html.

import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles.css";
const ReactDOM = ReactDOMClient;
window.React = React;


// ===== shared.jsx =====
// shared.jsx — design system primitives + icons + shared layout helpers
// Loaded after React/Babel, before any portal-specific code.

const { useState, useEffect, useRef, useMemo, useCallback, createContext, useContext, Fragment } = React;

// ─── Icons (stroke-only line set, 1.6 weight) ────────────────────────────────
const Icon = ({ name, size = 16, stroke = 1.6, ...rest }) => {
  const props = {
    width: size, height: size, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor", strokeWidth: stroke,
    strokeLinecap: "round", strokeLinejoin: "round",
    ...rest,
  };
  switch (name) {
    case "dashboard": return <svg {...props}><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>;
    case "ticket": return <svg {...props}><path d="M3 8.5V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.5a2 2 0 0 0 0 7V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5a2 2 0 0 0 0-7Z"/><path d="M9 5v14"/></svg>;
    case "users": return <svg {...props}><circle cx="9" cy="8" r="3.5"/><path d="M2.5 19c0-3 2.9-5 6.5-5s6.5 2 6.5 5"/><circle cx="17" cy="9" r="2.5"/><path d="M21.5 18c0-2.2-2-3.6-4.5-3.6"/></svg>;
    case "box": return <svg {...props}><path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9L12 3Z"/><path d="m3.5 7.5 8.5 4.5 8.5-4.5"/><path d="M12 12v9"/></svg>;
    case "people": return <svg {...props}><circle cx="8" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M2 19c0-2.5 2.5-4.5 6-4.5s6 2 6 4.5"/><path d="M14 16c1-1 2.5-1.5 4-1.5 2.5 0 4 1.5 4 3.5"/></svg>;
    case "shield": return <svg {...props}><path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z"/></svg>;
    case "form": return <svg {...props}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>;
    case "chart": return <svg {...props}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>;
    case "gauge": return <svg {...props}><path d="M4 18a8 8 0 1 1 16 0"/><path d="m13.5 13.5-2 4"/><circle cx="12" cy="18" r="1"/></svg>;
    case "settings": return <svg {...props}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .4 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.4 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.4l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .4-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.4-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.4 1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.4l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.4 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.6 1Z"/></svg>;
    case "search": return <svg {...props}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "bell": return <svg {...props}><path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8Z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>;
    case "plus": return <svg {...props}><path d="M12 5v14M5 12h14"/></svg>;
    case "minus": return <svg {...props}><path d="M5 12h14"/></svg>;
    case "x": return <svg {...props}><path d="M18 6 6 18M6 6l12 12"/></svg>;
    case "check": return <svg {...props}><path d="m5 12 5 5L20 7"/></svg>;
    case "chevron-down": return <svg {...props}><path d="m6 9 6 6 6-6"/></svg>;
    case "chevron-up": return <svg {...props}><path d="m18 15-6-6-6 6"/></svg>;
    case "chevron-left": return <svg {...props}><path d="m15 6-6 6 6 6"/></svg>;
    case "chevron-right": return <svg {...props}><path d="m9 6 6 6-6 6"/></svg>;
    case "arrow-right": return <svg {...props}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case "arrow-left": return <svg {...props}><path d="M19 12H5M11 6l-6 6 6 6"/></svg>;
    case "arrow-up": return <svg {...props}><path d="M12 19V5M6 11l6-6 6 6"/></svg>;
    case "arrow-down": return <svg {...props}><path d="M12 5v14M6 13l6 6 6-6"/></svg>;
    case "more": return <svg {...props}><circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/></svg>;
    case "edit": return <svg {...props}><path d="M11 4H4v16h16v-7"/><path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5Z"/></svg>;
    case "archive": return <svg {...props}><rect x="3" y="4" width="18" height="5" rx="1.5"/><path d="M5 9v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9M10 13h4"/></svg>;
    case "trash": return <svg {...props}><path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13"/></svg>;
    case "filter": return <svg {...props}><path d="M4 5h16M7 12h10M10 19h4"/></svg>;
    case "calendar": return <svg {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>;
    case "mail": return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 7 9-7"/></svg>;
    case "phone": return <svg {...props}><path d="M5 4h3l2 5-3 1.5a12 12 0 0 0 6.5 6.5L15 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z"/></svg>;
    case "pin": return <svg {...props}><path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case "paperclip": return <svg {...props}><path d="m21 12-9 9a5 5 0 0 1-7-7L14 5a3 3 0 0 1 5 5l-9 9a1.5 1.5 0 0 1-2-2l7-7"/></svg>;
    case "lock": return <svg {...props}><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>;
    case "globe": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case "logout": return <svg {...props}><path d="M9 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>;
    case "eye": return <svg {...props}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "eye-off": return <svg {...props}><path d="M3 3l18 18M10.6 10.6A2 2 0 0 0 14 14M9.9 5.1A9 9 0 0 1 22 12c-.5 1-1.2 2-2.1 2.9M6.6 6.6C4.4 8 3 10 2 12c0 0 3.5 7 10 7 1.9 0 3.6-.6 5-1.5"/></svg>;
    case "warning": return <svg {...props}><path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v5M12 18v.5"/></svg>;
    case "info": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8v.5"/></svg>;
    case "check-circle": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>;
    case "user": return <svg {...props}><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>;
    case "headset": return <svg {...props}><path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="5" height="7" rx="1.5"/><rect x="17" y="14" width="5" height="7" rx="1.5"/><path d="M22 17v1a3 3 0 0 1-3 3h-3"/></svg>;
    case "send": return <svg {...props}><path d="M3 11 21 3l-8 18-2-8-8-2Z"/></svg>;
    case "menu": return <svg {...props}><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
    case "sidebar": return <svg {...props}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/></svg>;
    case "trending-up": return <svg {...props}><path d="m3 17 6-6 4 4 8-8M14 7h7v7"/></svg>;
    case "circle-dashed": return <svg {...props}><circle cx="12" cy="12" r="9" strokeDasharray="3 3"/></svg>;
    case "smile": return <svg {...props}><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9.5h.01M15 9.5h.01"/></svg>;
    case "sparkles": return <svg {...props}><path d="M12 3v3M12 18v3M5 12H2M22 12h-3M18.4 5.6l-2 2M7.6 16.4l-2 2M18.4 18.4l-2-2M7.6 7.6l-2-2"/></svg>;
    case "history": return <svg {...props}><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></svg>;
    case "org": return <svg {...props}><rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v3M6 16v-2h12v2M12 11v3"/></svg>;
    case "tag": return <svg {...props}><path d="m20 12-8 8a2 2 0 0 1-2.8 0L3 13.8a2 2 0 0 1-.5-1.3V5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.3.5L20 9.2a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1"/></svg>;
    case "download": return <svg {...props}><path d="M12 3v12M6 9l6 6 6-6M4 21h16"/></svg>;
    case "external": return <svg {...props}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case "refresh": return <svg {...props}><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8"/><path d="M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.2L3 16"/><path d="M3 21v-5h5"/></svg>;
    case "moon": return <svg {...props}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>;
    case "sun": return <svg {...props}><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/></svg>;
    default: return null;
  }
};

// ─── Logo ────────────────────────────────────────────────────────────────────
const Logo = ({ size = 30, dark = false }) => (
  <span className="logo" style={{ width: size, height: size, background: dark ? "#fff" : "#000", color: dark ? "#000" : "#fff" }}>
    <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14v-2a8 8 0 0 1 16 0v2"/>
      <rect x="2" y="14" width="5" height="7" rx="1.5" fill="currentColor"/>
      <rect x="17" y="14" width="5" height="7" rx="1.5" fill="currentColor"/>
    </svg>
  </span>
);

// ─── Avatar (deterministic color from name) ──────────────────────────────────
const avatarPalette = ["#000000", "#1a1a1a", "#27272a", "#3f3f46", "#525252"];
const Avatar = ({ name, src, size = "md", style }) => {
  const initials = useMemo(() => {
    if (!name) return "?";
    const parts = name.trim().split(/\s+/);
    return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
  }, [name]);
  const bg = useMemo(() => {
    if (!name) return "#525252";
    let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) & 0xffffffff;
    return avatarPalette[Math.abs(h) % avatarPalette.length];
  }, [name]);
  return (
    <span className={`avatar ${size === "md" ? "" : size}`} style={{ background: bg, ...style }} title={name}>
      {initials}
    </span>
  );
};

// ─── Badge ───────────────────────────────────────────────────────────────────
const statusClass = (s) => {
  const k = (s || "").toLowerCase();
  if (k === "active" || k === "paid") return "badge-active";
  if (k === "archived") return "badge-archived";
  if (k === "suspended") return "badge-suspended";
  if (k === "new") return "badge-new";
  if (k === "open") return "badge-open";
  if (k === "in progress" || k === "in-progress") return "badge-in-progress";
  if (k === "pending customer" || k === "pending") return "badge-pending";
  if (k === "resolved") return "badge-resolved";
  if (k === "closed") return "badge-closed";
  if (k === "high" || k === "high priority") return "badge-high";
  if (k === "medium" || k === "medium priority") return "badge-medium";
  if (k === "low" || k === "low priority") return "badge-low";
  if (k === "minor") return "badge-low";
  if (k === "major") return "badge-high";
  if (k === "critical") return "badge-critical";
  if (k === "unpaid") return "badge-unpaid";
  if (k === "trial") return "badge-trial";
  if (k === "expiring") return "badge-expiring";
  if (k === "warning") return "badge-warning";
  return "badge-soft";
};
const Badge = ({ children, status, className = "", dot = false }) => (
  <span className={`badge ${statusClass(status || children)} ${dot ? "dot" : ""} ${className}`}>{children}</span>
);

// ─── Button ─────────────────────────────────────────────────────────────────
const Button = ({ variant = "primary", size = "md", icon, iconRight, children, className = "", block, ...rest }) => {
  const cls = `btn btn-${variant} ${size === "sm" ? "btn-sm" : size === "xs" ? "btn-xs" : ""} ${block ? "btn-block" : ""} ${className}`;
  return (
    <button className={cls.trim()} {...rest}>
      {icon ? <Icon name={icon} size={size === "sm" ? 14 : 16}/> : null}
      {children}
      {iconRight ? <Icon name={iconRight} size={14}/> : null}
    </button>
  );
};

// ─── Card ────────────────────────────────────────────────────────────────────
const Card = ({ title, action, children, pad = true, className = "" }) => (
  <div className={`card ${className}`}>
    {title || action ? (
      <div className="card-hd">
        {typeof title === "string" ? <h3>{title}</h3> : title}
        {action}
      </div>
    ) : null}
    {pad ? <div className="card-bd">{children}</div> : children}
  </div>
);

// ─── ProgressBar ─────────────────────────────────────────────────────────────
const ProgressBar = ({ value, max, label, unit = "", showPct = true }) => {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const tone = pct >= 90 ? "danger" : pct >= 75 ? "warn" : "";
  return (
    <div style={{ marginBottom: 10 }}>
      {label ? (
        <div className="prog-row">
          <p className="label">{label}</p>
          <span className="vals mono">{value.toLocaleString()} / {max.toLocaleString()}{unit}</span>
        </div>
      ) : null}
      <div className={`prog ${tone}`}><div className="bar" style={{ width: pct + "%" }}/></div>
      {showPct ? <div className="prog-pct mono">{pct}%</div> : null}
    </div>
  );
};

// ─── Modal ───────────────────────────────────────────────────────────────────
const Modal = ({ open, onClose, title, children, actions, destructive }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {title ? <h2>{title}</h2> : null}
        {children ? <div>{children}</div> : null}
        {actions ? <div className="modal-actions">{actions}</div> : null}
      </div>
    </div>
  );
};

// ─── Toast Context ───────────────────────────────────────────────────────────
const ToastCtx = createContext(null);
const useToast = () => useContext(ToastCtx);
const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((t) => {
    const id = Date.now() + Math.random();
    setToasts((arr) => [...arr, { id, ...t }]);
    setTimeout(() => setToasts((arr) => arr.filter((x) => x.id !== id)), t.duration || 4000);
  }, []);
  const api = useMemo(() => ({
    success: (msg, title) => push({ kind: "success", msg, title }),
    error: (msg, title) => push({ kind: "error", msg, title }),
    info: (msg, title) => push({ kind: "info", msg, title }),
  }), [push]);
  return (
    <ToastCtx.Provider value={api}>
      {children}
      <div className="toast-stack">
        {toasts.map((t) => (
          <div key={t.id} className={`toast ${t.kind}`}>
            <span className="toast-icon">
              <Icon name={t.kind === "success" ? "check-circle" : t.kind === "error" ? "warning" : "info"} size={18} stroke={1.8}/>
            </span>
            <div className="toast-body">
              {t.title ? <b>{t.title}</b> : null}
              <div className="msg">{t.msg}</div>
            </div>
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
};

// ─── Dropdown (controlled, anchored) ─────────────────────────────────────────
const useClickAway = (ref, onAway) => {
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) onAway(); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [ref, onAway]);
};

// ─── Kebab menu ─────────────────────────────────────────────────────────────
const KebabMenu = ({ items }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useClickAway(ref, () => setOpen(false));
  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <button className="kebab-btn" onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }} aria-label="More actions"><Icon name="more" size={16}/></button>
      {open ? (
        <div className="dropdown" style={{ right: 0, top: "100%", marginTop: 4 }}>
          {items.map((it, i) => it.sep ? <div key={i} className="dropdown-sep"/> : (
            <div key={i} className={`ddi ${it.destructive ? "destructive" : ""}`} onClick={(e) => { e.stopPropagation(); setOpen(false); it.onClick && it.onClick(); }}>
              {it.icon ? <Icon name={it.icon} size={14}/> : null}
              <span>{it.label}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

// ─── Sparkline (chart placeholder, stylized) ─────────────────────────────────
const Sparkline = ({ data, color = "var(--chart-1)", w = 80, h = 28, fill = true }) => {
  if (!data || !data.length) return null;
  const max = Math.max(...data), min = Math.min(...data);
  const range = max - min || 1;
  const pts = data.map((v, i) => [(i / (data.length - 1)) * w, h - ((v - min) / range) * (h - 4) - 2]);
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = d + ` L${w} ${h} L0 ${h} Z`;
  const gid = useMemo(() => "spk" + Math.random().toString(36).slice(2, 8), []);
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      {fill ? <path d={area} fill={`url(#${gid})`}/> : null}
      <path d={d} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// ─── LineChart (large stylized) ──────────────────────────────────────────────
const LineChart = ({ data, w = 700, h = 220, tooltip }) => {
  const pad = { l: 40, r: 16, t: 16, b: 28 };
  const max = Math.max(...data.values), min = Math.min(...data.values);
  const range = max - min || 1;
  const innerW = w - pad.l - pad.r, innerH = h - pad.t - pad.b;
  const pts = data.values.map((v, i) => [pad.l + (i / (data.values.length - 1)) * innerW, pad.t + innerH - ((v - min) / range) * innerH]);
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  const area = d + ` L${pts[pts.length - 1][0]} ${h - pad.b} L${pts[0][0]} ${h - pad.b} Z`;
  const ticks = 4;
  const tipIdx = tooltip != null ? tooltip : Math.floor(data.values.length * 0.55);
  const tip = pts[tipIdx];
  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ display: "block" }}>
      <defs>
        <linearGradient id="lc1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--chart-1)" stopOpacity="0.22"/>
          <stop offset="100%" stopColor="var(--chart-1)" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {Array.from({ length: ticks + 1 }).map((_, i) => {
        const y = pad.t + (i / ticks) * innerH;
        const val = Math.round(max - (i / ticks) * range);
        return (
          <g key={i}>
            <line x1={pad.l} x2={w - pad.r} y1={y} y2={y} stroke="var(--border)" strokeWidth="1" strokeDasharray="2 4"/>
            <text x={pad.l - 6} y={y + 3} fontSize="10" fill="var(--text-muted)" textAnchor="end" fontFamily="Geist Mono">{val.toLocaleString()}</text>
          </g>
        );
      })}
      <path d={area} fill="url(#lc1)"/>
      <path d={d} fill="none" stroke="var(--chart-1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {data.labels.map((l, i) => i % Math.ceil(data.labels.length / 6) === 0 ? (
        <text key={i} x={pts[i][0]} y={h - 8} fontSize="10.5" fill="var(--text-muted)" textAnchor="middle">{l}</text>
      ) : null)}
      {tip ? (
        <g>
          <circle cx={tip[0]} cy={tip[1]} r="5" fill="var(--chart-1)" stroke="#fff" strokeWidth="2"/>
          <g transform={`translate(${tip[0] - 60}, ${Math.max(8, tip[1] - 44)})`}>
            <rect width="120" height="34" rx="6" fill="#000"/>
            <text x="10" y="14" fill="rgba(255,255,255,0.7)" fontSize="10">{data.labels[tipIdx]}</text>
            <text x="10" y="28" fill="#fff" fontSize="12" fontWeight="600" fontFamily="Geist Mono">{data.values[tipIdx].toLocaleString()} {data.unit || ""}</text>
          </g>
        </g>
      ) : null}
    </svg>
  );
};

// ─── BarChart (vertical, stacked or grouped) ─────────────────────────────────
const BarChart = ({ data, max, colors = ["var(--chart-1)", "var(--chart-1-soft)"], height = 200 }) => {
  const _max = max || Math.max(...data.map((d) => d.values.reduce((a, b) => a + b, 0)));
  return (
    <div className="bar-chart" style={{ height }}>
      {data.map((d, i) => (
        <div key={i} className="bar-col">
          <div style={{ width: "100%", maxWidth: 36, display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", height: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column-reverse", alignItems: "center", width: "100%" }}>
              {d.values.map((v, j) => (
                <div key={j} className="bar" title={`${d.label}: ${v}`} style={{
                  background: colors[j] || colors[0],
                  height: ((v / _max) * (height - 28)) + "px",
                  borderRadius: j === d.values.length - 1 ? "6px 6px 0 0" : 0,
                  width: "100%",
                  minHeight: v > 0 ? 4 : 0,
                }}/>
              ))}
            </div>
          </div>
          <div className="bar-label">{d.label}</div>
        </div>
      ))}
    </div>
  );
};

// ─── Stat Card ───────────────────────────────────────────────────────────────
const StatCard = ({ label, value, trend, trendDir, sparkData, sparkColor, sub }) => (
  <div className="stat-card">
    <p className="stat-label">{label}</p>
    <div className="stat-value">{value}</div>
    {trend ? (
      <div className={`stat-meta trend-${trendDir || "flat"}`}>
        {trendDir === "up" ? <Icon name="arrow-up" size={12} stroke={2}/> : trendDir === "down" ? <Icon name="arrow-down" size={12} stroke={2}/> : null}
        <span>{trend}</span>
      </div>
    ) : sub ? <div className="stat-meta">{sub}</div> : null}
    {sparkData ? <div className="stat-spark"><Sparkline data={sparkData} color={sparkColor || "var(--chart-1)"} w={68} h={28}/></div> : null}
  </div>
);

// ─── Notification panel ─────────────────────────────────────────────────────
const NotificationPanel = ({ items, onItemClick, onClose }) => {
  const ref = useRef();
  useClickAway(ref, onClose);
  return (
    <div className="notif-panel" ref={ref}>
      <div className="notif-hd">
        <b>Notifications</b>
        <a>Mark all as read</a>
      </div>
      <div className="notif-list">
        {items.map((n, i) => (
          <div key={i} className="notif-item" onClick={() => onItemClick && onItemClick(n)}>
            <div className="notif-icon">{n.emoji || <Icon name={n.icon || "bell"} size={14}/>}</div>
            <div className="notif-body">
              <p>{n.text}</p>
              <span className="meta">{n.time}</span>
            </div>
            {n.unread ? <span className="unread-dot"/> : null}
          </div>
        ))}
      </div>
      <div className="notif-foot"><a>View all notifications →</a></div>
    </div>
  );
};

// ─── Pagination ─────────────────────────────────────────────────────────────
const Pagination = ({ page, totalPages, onPage, summary }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderTop: "1px solid var(--border)", background: "#fff", fontSize: 12.5, color: "var(--text-muted)" }}>
    <span>{summary}</span>
    <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
      <button className="btn btn-ghost btn-sm" disabled={page === 1} onClick={() => onPage(page - 1)} style={{ height: 28 }}><Icon name="chevron-left" size={14}/></button>
      {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
        const p = i + 1;
        return (
          <button key={p} className={`btn ${p === page ? "btn-primary" : "btn-ghost"} btn-sm`} onClick={() => onPage(p)} style={{ minWidth: 28, padding: "0 8px", height: 28 }}>{p}</button>
        );
      })}
      {totalPages > 5 ? <><span style={{ padding: "0 4px" }}>…</span><button className="btn btn-ghost btn-sm" onClick={() => onPage(totalPages)} style={{ minWidth: 28, padding: "0 8px", height: 28 }}>{totalPages}</button></> : null}
      <button className="btn btn-ghost btn-sm" disabled={page === totalPages} onClick={() => onPage(page + 1)} style={{ height: 28 }}><Icon name="chevron-right" size={14}/></button>
    </div>
  </div>
);

// ─── Empty State ────────────────────────────────────────────────────────────
const EmptyState = ({ icon = "ticket", title, desc, action }) => (
  <div className="empty">
    <div className="empty-icon"><Icon name={icon} size={28}/></div>
    <h3>{title}</h3>
    {desc ? <p>{desc}</p> : null}
    {action || null}
  </div>
);

// ─── Hash router hook ───────────────────────────────────────────────────────
const useHashRoute = (initial = "/") => {
  const parse = () => {
    const h = window.location.hash.replace(/^#/, "");
    return h || initial;
  };
  const [route, setRoute] = useState(parse);
  useEffect(() => {
    const h = () => setRoute(parse());
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  const navigate = useCallback((to) => {
    window.location.hash = to;
  }, []);
  return [route, navigate];
};

// Match a route pattern like "/tickets/:id" against a path like "/tickets/TKT-1042"
// Returns null or params object.
const matchRoute = (pattern, path) => {
  const pp = pattern.split("/").filter(Boolean);
  const ap = path.split("/").filter(Boolean);
  if (pp.length !== ap.length) return null;
  const params = {};
  for (let i = 0; i < pp.length; i++) {
    if (pp[i].startsWith(":")) params[pp[i].slice(1)] = decodeURIComponent(ap[i]);
    else if (pp[i] !== ap[i]) return null;
  }
  return params;
};

// Format date helper
const fmtDate = (d) => {
  if (typeof d === "string") d = new Date(d);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${String(d.getDate()).padStart(2, "0")} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
const fmtTime = (d) => {
  if (typeof d === "string") d = new Date(d);
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
};
const fmtRelative = (d) => {
  if (typeof d === "string") d = new Date(d);
  const diff = (Date.now() - d.getTime()) / 1000;
  if (diff < 60) return "Just now";
  if (diff < 3600) return Math.floor(diff / 60) + " mins ago";
  if (diff < 86400) return Math.floor(diff / 3600) + " hours ago";
  if (diff < 86400 * 2) return "Yesterday";
  return Math.floor(diff / 86400) + " days ago";
};

Object.assign(window, {
  Icon, Logo, Avatar, Badge, Button, Card, ProgressBar, Modal,
  ToastProvider, useToast, KebabMenu, Sparkline, LineChart, BarChart,
  StatCard, NotificationPanel, Pagination, EmptyState,
  useHashRoute, matchRoute, useClickAway,
  fmtDate, fmtTime, fmtRelative, statusClass,
});

// ===== tweaks-panel.jsx =====

// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" data-omelette-chrome=""
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">
          {children}
        </div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}

Object.assign(window, {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton,
});

// ===== tenant-data.jsx =====
// tenant-data.jsx — mock data + shared state for Tenant Admin portal
// All data lives in window.TENANT_DATA; screens read & mutate via TenantStore hook.

const TENANT = {
  workspace: { name: "Peerless FinTech", code: "PRL-001", package: "Enterprise" },
  currentUser: { name: "Nnamdi Eze", email: "nnamdi@peerless.io", role: "Client Administrator" },
  roles: ["Client Owner", "Client Administrator", "Support Manager", "Support Agent", "Viewer / Auditor"],
  license: {
    package: "Enterprise",
    billingPeriod: "01 Jan 2026 – 31 Dec 2026",
    paymentStatus: "Paid",
    daysRemaining: 220,
    customers: { used: 18, limit: 25 },
    tickets: { used: 1420, limit: 2000 },
    users: { used: 9, limit: 10 },
    products: { used: 4, limit: 5 },
  },
  agents: [
    { name: "Mubarak Adewale", email: "mubarak@peerless.io", role: "Support Agent" },
    { name: "Qudus Salawu", email: "qudus@peerless.io", role: "Support Agent" },
    { name: "Ify Nwosu", email: "ify@peerless.io", role: "Support Manager" },
    { name: "Tunde Afolabi", email: "tunde@peerless.io", role: "Support Agent" },
    { name: "Bola Adeyemi", email: "bola@peerless.io", role: "Support Agent" },
  ],
  users: [
    { name: "Chisom Obi", email: "chisom@peerless.io", role: "Client Owner", status: "Active", created: "10 Jan 2025" },
    { name: "Nnamdi Eze", email: "nnamdi@peerless.io", role: "Client Administrator", status: "Active", created: "12 Jan 2025" },
    { name: "Mubarak Adewale", email: "mubarak@peerless.io", role: "Support Agent", status: "Active", created: "15 Jan 2025" },
    { name: "Qudus Salawu", email: "qudus@peerless.io", role: "Support Agent", status: "Active", created: "18 Jan 2025" },
    { name: "Ify Nwosu", email: "ify@peerless.io", role: "Support Manager", status: "Active", created: "22 Jan 2025" },
    { name: "Tunde Afolabi", email: "tunde@peerless.io", role: "Support Agent", status: "Active", created: "01 Feb 2025" },
    { name: "Bola Adeyemi", email: "bola@peerless.io", role: "Support Agent", status: "Active", created: "08 Feb 2025" },
    { name: "Chika Nnaji", email: "chika@peerless.io", role: "Viewer / Auditor", status: "Active", created: "14 Feb 2025" },
    { name: "Adaeze Okeke", email: "adaeze@peerless.io", role: "Support Agent", status: "Active", created: "01 Mar 2025" },
    { name: "Ex-Staff Member", email: "ex@peerless.io", role: "Support Agent", status: "Archived", created: "15 Nov 2024" },
  ],
  customers: [
    { id: "KOL-001", name: "Kolomoni Ltd", status: "Active", reps: 3, openTickets: 12, totalTickets: 47, products: ["SeaBaas"], email: "support@kolomoni.com", phone: "+234 802 345 6789", address: "12 Adeola Odeku St, Victoria Island, Lagos", created: "15 Feb 2025" },
    { id: "STR-002", name: "Sterling MFB", status: "Active", reps: 4, openTickets: 18, totalTickets: 89, products: ["SeaBaas", "Xplorer", "Kusala"], email: "ops@sterlingmfb.ng", phone: "+234 803 456 7890", address: "5 Marina Rd, Lagos Island, Lagos", created: "20 Feb 2025" },
    { id: "QNT-003", name: "Quantum MFB", status: "Active", reps: 2, openTickets: 7, totalTickets: 23, products: ["Mizan"], email: "team@quantummfb.com", phone: "+234 805 567 8901", address: "44 Bode Thomas, Surulere, Lagos", created: "10 Mar 2025" },
    { id: "FMC-004", name: "First Merchants Co.", status: "Archived", reps: 1, openTickets: 0, totalTickets: 14, products: [], email: "info@firstmerchants.ng", phone: "+234 807 678 9012", address: "Abuja FCT", created: "01 Jan 2025" },
  ],
  products: [
    { id: "SB-001", name: "SeaBaas", status: "Active", customers: 2, openTickets: 22, created: "12 Jan 2025", desc: "Core banking & accounts" },
    { id: "MZ-002", name: "Mizan", status: "Active", customers: 1, openTickets: 7, created: "14 Jan 2025", desc: "Compliance & reporting" },
    { id: "XP-003", name: "Xplorer", status: "Active", customers: 1, openTickets: 11, created: "16 Jan 2025", desc: "Transaction analytics" },
    { id: "KS-004", name: "Kusala", status: "Active", customers: 1, openTickets: 8, created: "18 Jan 2025", desc: "Customer onboarding" },
    { id: "LG-005", name: "Legacy Gateway", status: "Archived", customers: 0, openTickets: 0, created: "01 Nov 2024", desc: "Deprecated payment gateway" },
  ],
  tickets: [
    {
      id: "TKT-1042", subject: "Login error on mobile app", customer: "Kolomoni Ltd", customerId: "KOL-001",
      product: "SeaBaas", priority: "High", status: "In Progress", agent: "Mubarak Adewale",
      rep: "Aminu Bello", repEmail: "aminu@kolomoni.com", category: "Authentication",
      created: "25 May 2026 09:14", updated: "25 May 2026 10:47", createdDay: "25 May 2026",
      messages: [
        { kind: "customer", name: "Aminu Bello", role: "Customer Representative, Kolomoni Ltd", time: "25 May 2026, 09:14", body: "Good morning, I have been trying to log into the SeaBaas mobile app since yesterday and I keep getting 'Authentication failed' error. I've tried resetting my password twice and the issue persists. Please help urgently.", attachment: { name: "screenshot_error.png", size: "35KB" } },
        { kind: "agent", name: "Mubarak Adewale", role: "Support Agent, Peerless FinTech", time: "25 May 2026, 10:45", body: "Thank you for reaching out. I've escalated this to our technical team. Could you please confirm which device and OS version you're using?" },
        { kind: "internal", name: "Mubarak Adewale", role: "Support Agent, Peerless FinTech", time: "25 May 2026, 10:47", body: "Checked the auth logs — seems like their session token is corrupted. @Qudus please look at this on the backend side." },
      ],
      history: [
        { time: "09:14", text: "Ticket created", tone: "" },
        { time: "10:30", text: "Assigned to Mubarak A.", tone: "info" },
        { time: "10:44", text: "Status: New → In Progress", tone: "warn" },
        { time: "10:45", text: "Reply sent to customer", tone: "" },
        { time: "10:47", text: "Internal note added", tone: "" },
      ],
    },
    { id: "TKT-1041", subject: "Transaction declined unexpectedly", customer: "Sterling MFB", customerId: "STR-002", product: "SeaBaas", priority: "High", status: "New", agent: null, rep: "Olamide Bakare", category: "Transaction", created: "25 May 2026 08:02", updated: "25 May 2026 08:02", createdDay: "25 May 2026" },
    { id: "TKT-1040", subject: "Onboarding documentation missing", customer: "Kolomoni Ltd", customerId: "KOL-001", product: "SeaBaas", priority: "Medium", status: "Pending Customer", agent: "Qudus Salawu", rep: "Aminu Bello", category: "Onboarding", created: "24 May 2026 15:30", updated: "24 May 2026 17:10", createdDay: "24 May 2026" },
    { id: "TKT-1039", subject: "API timeout on POST /transfer", customer: "Sterling MFB", customerId: "STR-002", product: "Xplorer", priority: "Low", status: "Open", agent: "Mubarak Adewale", rep: "Yetunde Lawal", category: "API", created: "23 May 2026 11:45", updated: "24 May 2026 09:20", createdDay: "23 May 2026" },
    { id: "TKT-1038", subject: "Wrong debit amount on customer account", customer: "Sterling MFB", customerId: "STR-002", product: "Kusala", priority: "High", status: "Resolved", agent: "Qudus Salawu", rep: "Yetunde Lawal", category: "Transaction", created: "22 May 2026 14:10", updated: "23 May 2026 16:00", createdDay: "22 May 2026" },
    { id: "TKT-1037", subject: "App crash on Android 14", customer: "Kolomoni Ltd", customerId: "KOL-001", product: "SeaBaas", priority: "High", status: "Closed", agent: "Mubarak Adewale", rep: "Aminu Bello", category: "Other", created: "20 May 2026 10:00", updated: "21 May 2026 12:00", createdDay: "20 May 2026" },
    { id: "TKT-1036", subject: "Feature request: export to CSV", customer: "Quantum MFB", customerId: "QNT-003", product: "Mizan", priority: "Low", status: "Open", agent: null, rep: "Sade Ojo", category: "Other", created: "20 May 2026 09:15", updated: "20 May 2026 09:15", createdDay: "20 May 2026" },
    { id: "TKT-1035", subject: "KYC verification delay for 3 days", customer: "Sterling MFB", customerId: "STR-002", product: "Xplorer", priority: "Medium", status: "In Progress", agent: "Qudus Salawu", rep: "Olamide Bakare", category: "Onboarding", created: "19 May 2026 16:40", updated: "23 May 2026 11:00", createdDay: "19 May 2026" },
    { id: "TKT-1034", subject: "Cannot generate compliance report", customer: "Quantum MFB", customerId: "QNT-003", product: "Mizan", priority: "Medium", status: "Open", agent: "Ify Nwosu", rep: "Sade Ojo", category: "Other", created: "18 May 2026 13:20", updated: "19 May 2026 10:30", createdDay: "18 May 2026" },
    { id: "TKT-1033", subject: "Bulk customer import failing", customer: "Sterling MFB", customerId: "STR-002", product: "Kusala", priority: "High", status: "Resolved", agent: "Mubarak Adewale", rep: "Yetunde Lawal", category: "API", created: "17 May 2026 11:00", updated: "18 May 2026 14:00", createdDay: "17 May 2026" },
    { id: "TKT-1032", subject: "Need to add new admin user", customer: "Kolomoni Ltd", customerId: "KOL-001", product: "SeaBaas", priority: "Low", status: "Closed", agent: "Qudus Salawu", rep: "Aminu Bello", category: "Account Management", created: "15 May 2026 09:30", updated: "16 May 2026 11:00", createdDay: "15 May 2026" },
    { id: "TKT-1031", subject: "Two-factor auth setup question", customer: "Quantum MFB", customerId: "QNT-003", product: "Mizan", priority: "Low", status: "Closed", agent: "Ify Nwosu", rep: "Sade Ojo", category: "Authentication", created: "12 May 2026 10:15", updated: "13 May 2026 12:00", createdDay: "12 May 2026" },
  ],
  forms: [
    { id: "FRM-001", name: "Default support form", status: "Active", isDefault: true, products: ["SeaBaas", "Mizan", "Xplorer", "Kusala"], submissions: 1420, fields: 6, updated: "12 May 2026" },
    { id: "FRM-002", name: "Bug report", status: "Active", isDefault: false, products: ["SeaBaas", "Xplorer"], submissions: 248, fields: 8, updated: "08 May 2026" },
    { id: "FRM-003", name: "Feature request", status: "Active", isDefault: false, products: ["SeaBaas", "Mizan"], submissions: 87, fields: 5, updated: "02 May 2026" },
    { id: "FRM-004", name: "Legacy intake (v1)", status: "Archived", isDefault: false, products: [], submissions: 612, fields: 9, updated: "01 Mar 2026" },
  ],
  notifications: [
    { emoji: "🎫", text: "TKT-1041 has been assigned to you", time: "5 mins ago", unread: true, route: "/tickets/TKT-1041" },
    { emoji: "💬", text: "@Qudus mentioned you in TKT-1042", time: "32 mins ago", unread: true, route: "/tickets/TKT-1042" },
    { emoji: "⚠️", text: "User license at 90% capacity", time: "2 hours ago", unread: true, route: "/license" },
    { emoji: "✅", text: "TKT-1038 was resolved by Mubarak A.", time: "Yesterday", unread: false, route: "/tickets/TKT-1038" },
  ],
  permissions: [
    { perm: "View own tickets", agent: true, manager: true, admin: true, owner: true, viewer: true },
    { perm: "Create tickets", agent: true, manager: true, admin: true, owner: true, viewer: false },
    { perm: "Assign tickets", agent: false, manager: true, admin: true, owner: true, viewer: false },
    { perm: "Add internal note", agent: true, manager: true, admin: true, owner: true, viewer: false },
    { perm: "Reply to customer", agent: true, manager: true, admin: true, owner: true, viewer: false },
    { perm: "Update ticket status", agent: true, manager: true, admin: true, owner: true, viewer: false },
    { perm: "Archive tickets", agent: false, manager: true, admin: true, owner: true, viewer: false },
    { perm: "Manage customers", agent: false, manager: false, admin: true, owner: true, viewer: false },
    { perm: "Manage products", agent: false, manager: false, admin: true, owner: true, viewer: false },
    { perm: "Manage users & roles", agent: false, manager: false, admin: true, owner: true, viewer: false },
    { perm: "Configure ticket forms", agent: false, manager: false, admin: true, owner: true, viewer: false },
    { perm: "View reports", agent: false, manager: true, admin: true, owner: true, viewer: true },
    { perm: "View audit logs", agent: false, manager: false, admin: true, owner: true, viewer: true },
    { perm: "View license usage", agent: false, manager: false, admin: true, owner: true, viewer: false },
  ],
  // ── Permission catalog (drives role management + matrix) ──
  permCatalog: [
    { id: "ticket-view", label: "View own tickets", group: "Tickets" },
    { id: "ticket-create", label: "Create tickets", group: "Tickets" },
    { id: "ticket-assign", label: "Assign tickets", group: "Tickets" },
    { id: "ticket-note", label: "Add internal note", group: "Tickets" },
    { id: "ticket-reply", label: "Reply to customer", group: "Tickets" },
    { id: "ticket-status", label: "Update ticket status", group: "Tickets" },
    { id: "ticket-archive", label: "Archive tickets", group: "Tickets" },
    { id: "ticket-escalate", label: "Escalate tickets", group: "Tickets" },
    { id: "manage-customers", label: "Manage customers", group: "Customers & products" },
    { id: "manage-products", label: "Manage products & services", group: "Customers & products" },
    { id: "manage-users", label: "Manage users & roles", group: "Administration" },
    { id: "config-forms", label: "Configure ticket forms", group: "Administration" },
    { id: "view-audit", label: "View audit logs", group: "Administration" },
    { id: "view-license", label: "View license usage", group: "Administration" },
    { id: "view-reports", label: "View reports", group: "Reporting" },
  ],
  // ── Role definitions (system roles + any custom ones) ──
  roleDefs: [
    { key: "owner", name: "Client Owner", desc: "Full control of the workspace, billing and every setting.", system: true, perms: ["ticket-view","ticket-create","ticket-assign","ticket-note","ticket-reply","ticket-status","ticket-archive","ticket-escalate","manage-customers","manage-products","manage-users","config-forms","view-audit","view-license","view-reports"] },
    { key: "admin", name: "Client Administrator", desc: "Manage tickets, customers, products, users and configuration.", system: true, perms: ["ticket-view","ticket-create","ticket-assign","ticket-note","ticket-reply","ticket-status","ticket-archive","ticket-escalate","manage-customers","manage-products","manage-users","config-forms","view-audit","view-license","view-reports"] },
    { key: "manager", name: "Support Manager", desc: "Run the support queue — assign, escalate and report on tickets.", system: true, perms: ["ticket-view","ticket-create","ticket-assign","ticket-note","ticket-reply","ticket-status","ticket-archive","ticket-escalate","view-reports"] },
    { key: "agent", name: "Support Agent", desc: "Work assigned tickets, reply to customers and add internal notes.", system: true, perms: ["ticket-view","ticket-create","ticket-note","ticket-reply","ticket-status"] },
    { key: "viewer", name: "Viewer / Auditor", desc: "Read-only access to tickets, reports and the audit trail.", system: true, perms: ["ticket-view","view-reports","view-audit"] },
  ],
  // ── Escalation hierarchy (level 1 = front line, ascending to leadership) ──
  hierarchy: [
    { level: 1, title: "Support Agent", name: "Mubarak Adewale", email: "mubarak@peerless.io" },
    { level: 2, title: "Support Manager", name: "Ify Nwosu", email: "ify@peerless.io" },
    { level: 3, title: "Head of Support", name: "Chioma Okafor", email: "chioma@peerless.io" },
    { level: 4, title: "Director of Operations", name: "Chisom Obi", email: "chisom@peerless.io" },
  ],
  // ── Audit trail backlog (newest first) ──
  audit: [
    { id: "AUD-2051", ts: "25 May 2026, 10:47", actor: "Mubarak Adewale", action: "Added an internal note to TKT-1042", target: "TKT-1042", type: "reply" },
    { id: "AUD-2050", ts: "25 May 2026, 10:45", actor: "Mubarak Adewale", action: "Replied to customer on TKT-1042", target: "TKT-1042", type: "reply" },
    { id: "AUD-2049", ts: "25 May 2026, 10:44", actor: "Mubarak Adewale", action: "Changed status of TKT-1042 to In Progress", target: "TKT-1042", type: "updated" },
    { id: "AUD-2048", ts: "25 May 2026, 10:30", actor: "Ify Nwosu", action: "Assigned TKT-1042 to Mubarak Adewale", target: "TKT-1042", type: "assigned" },
    { id: "AUD-2047", ts: "25 May 2026, 09:14", actor: "System", action: "Created ticket TKT-1042 from customer email", target: "TKT-1042", type: "created" },
    { id: "AUD-2046", ts: "25 May 2026, 08:55", actor: "Nnamdi Eze", action: "Signed in from Lagos, NG", target: null, type: "auth" },
    { id: "AUD-2045", ts: "25 May 2026, 08:02", actor: "System", action: "Created ticket TKT-1041 from customer email", target: "TKT-1041", type: "created" },
    { id: "AUD-2044", ts: "24 May 2026, 17:32", actor: "Nnamdi Eze", action: "Invited adaeze@peerless.io as Support Agent", target: null, type: "user" },
    { id: "AUD-2043", ts: "24 May 2026, 17:10", actor: "Qudus Salawu", action: "Changed status of TKT-1040 to Pending Customer", target: "TKT-1040", type: "updated" },
    { id: "AUD-2042", ts: "24 May 2026, 15:30", actor: "Aminu Bello", action: "Created ticket TKT-1040", target: "TKT-1040", type: "created" },
    { id: "AUD-2041", ts: "24 May 2026, 11:18", actor: "Ify Nwosu", action: "Escalated TKT-1039 to Head of Support", target: "TKT-1039", type: "escalated" },
    { id: "AUD-2040", ts: "24 May 2026, 09:20", actor: "Mubarak Adewale", action: "Changed status of TKT-1039 to Open", target: "TKT-1039", type: "updated" },
    { id: "AUD-2039", ts: "23 May 2026, 16:40", actor: "Nnamdi Eze", action: 'Updated permissions for role "Support Manager"', target: null, type: "role" },
    { id: "AUD-2038", ts: "23 May 2026, 16:00", actor: "Qudus Salawu", action: "Changed status of TKT-1038 to Resolved", target: "TKT-1038", type: "updated" },
    { id: "AUD-2037", ts: "23 May 2026, 14:05", actor: "Chisom Obi", action: 'Created role "Billing Specialist"', target: null, type: "role" },
    { id: "AUD-2036", ts: "23 May 2026, 11:02", actor: "Nnamdi Eze", action: "Updated customer Sterling MFB", target: "STR-002", type: "updated" },
    { id: "AUD-2035", ts: "22 May 2026, 18:44", actor: "System", action: "Blocked ticket creation — customer limit reached", target: null, type: "security" },
    { id: "AUD-2034", ts: "22 May 2026, 14:10", actor: "Yetunde Lawal", action: "Created ticket TKT-1038", target: "TKT-1038", type: "created" },
    { id: "AUD-2033", ts: "21 May 2026, 12:00", actor: "Mubarak Adewale", action: "Archived TKT-1037", target: "TKT-1037", type: "archived" },
    { id: "AUD-2032", ts: "20 May 2026, 09:30", actor: "Chika Nnaji", action: "Exported the audit trail (CSV)", target: null, type: "auth" },
    { id: "AUD-2031", ts: "18 May 2026, 10:15", actor: "Nnamdi Eze", action: "Archived user ex@peerless.io", target: null, type: "user" },
    { id: "AUD-2030", ts: "15 May 2026, 08:48", actor: "Nnamdi Eze", action: 'Added product/service "Kusala"', target: "KS-004", type: "created" },
  ],
};

const todayStr = () => new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
const tsNow = () => `${todayStr()}, ${fmtTime(new Date())}`;
let _auditSeq = 9000;

// ── Session fingerprint (real browser/OS from navigator, real public IP via ipify) ──
const parseUA = (ua = "") => {
  let browser = "Unknown browser";
  if (/Edg\//.test(ua)) browser = "Edge";
  else if (/OPR\/|Opera/.test(ua)) browser = "Opera";
  else if (/Chrome\//.test(ua)) browser = "Chrome";
  else if (/Firefox\//.test(ua)) browser = "Firefox";
  else if (/Safari\//.test(ua)) browser = "Safari";
  let os = "Unknown OS";
  if (/Windows NT/.test(ua)) os = "Windows";
  else if (/Mac OS X/.test(ua)) os = "macOS";
  else if (/iPhone|iPad|iPod/.test(ua)) os = "iOS";
  else if (/Android/.test(ua)) os = "Android";
  else if (/Linux/.test(ua)) os = "Linux";
  return { browser, os };
};
const _session = (() => {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const { browser, os } = parseUA(ua);
  return { browser, os, ip: "Resolving…", location: "This session" };
})();
// Fire-and-forget: resolve the real public IP, fall back to a plausible value if blocked.
if (typeof fetch === "function") {
  fetch("https://api.ipify.org?format=json")
    .then((r) => r.json())
    .then((d) => { if (d && d.ip) _session.ip = d.ip; })
    .catch(() => { _session.ip = `102.89.${10 + Math.floor(Math.random() * 240)}.${1 + Math.floor(Math.random() * 240)}`; });
}
const auditEntry = (action, target, type, actor = "Nnamdi Eze") => ({
  id: "AUD-" + (++_auditSeq), ts: tsNow(), actor, action, target: target || null, type,
  browser: _session.browser, os: _session.os, ip: _session.ip, location: _session.location,
});

// Stable per-row source fallback for historical entries that pre-date session capture.
const _BROWSERS = ["Chrome", "Safari", "Firefox", "Edge"];
const _OSES = ["macOS", "Windows", "iOS", "Android"];
const _LOCS = ["Lagos, NG", "Abuja, NG", "Ibadan, NG", "Port Harcourt, NG"];
const hashStr = (s = "") => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) & 0x7fffffff; return h; };
const sourceFor = (a) => {
  if (a.ip && a.ip !== "Resolving…") return { browser: a.browser, os: a.os, ip: a.ip, location: a.location };
  if (a.actor === "System") return { browser: "Automation", os: "Server", ip: "10.0.0.12 (internal)", location: "Peerless data centre" };
  const h = hashStr(a.actor + a.id);
  return {
    browser: a.browser || _BROWSERS[h % _BROWSERS.length],
    os: a.os || _OSES[(h >> 2) % _OSES.length],
    ip: a.ip || `102.${88 + (h % 4)}.${(h >> 3) % 250}.${(h >> 7) % 250}`,
    location: a.location || _LOCS[(h >> 5) % _LOCS.length],
  };
};

const STATUS_LIST = ["New", "Open", "In Progress", "Pending Customer", "Resolved", "Closed"];
const PRIORITY_LIST = ["Low", "Medium", "High", "Critical"];
// Severity is the customer-impact scale, distinct from operational priority.
const SEVERITY_LIST = ["Critical", "High", "Medium", "Minor"];
const SEVERITY_BY_ID = {
  "TKT-1042": "High", "TKT-1041": "Critical", "TKT-1040": "Minor", "TKT-1039": "Medium",
  "TKT-1038": "Critical", "TKT-1037": "High", "TKT-1036": "Minor", "TKT-1035": "Medium",
  "TKT-1034": "High", "TKT-1033": "High", "TKT-1032": "Minor", "TKT-1031": "Minor",
};
// Seed severity onto the static ticket data without editing every record.
const seedTenant = () => ({
  ...TENANT,
  tickets: TENANT.tickets.map((t) => ({ ...t, severity: t.severity || SEVERITY_BY_ID[t.id] || "Medium" })),
});

// Tenant store — single useState shared via context
const TenantCtx = React.createContext(null);
const useTenant = () => React.useContext(TenantCtx);

const TenantStoreProvider = ({ children }) => {
  const [data, setData] = useState(seedTenant);
  const [role, setRole] = useState("Client Administrator");
  const [emptyMode, setEmptyMode] = useState(false);

  const updateTicket = useCallback((id, patch) => {
    setData((d) => ({
      ...d,
      tickets: d.tickets.map((t) => t.id === id ? { ...t, ...patch } : t),
    }));
  }, []);

  const addTicketMessage = useCallback((id, msg) => {
    setData((d) => ({
      ...d,
      tickets: d.tickets.map((t) => t.id === id ? {
        ...t,
        messages: [...(t.messages || []), msg],
        updated: msg.time,
        history: [...(t.history || []), { time: msg.time.split(", ")[1] || msg.time, text: msg.kind === "internal" ? "Internal note added" : "Reply sent to customer", tone: "" }],
      } : t),
    }));
  }, []);

  const addTicket = useCallback((t) => {
    setData((d) => ({ ...d, tickets: [t, ...d.tickets] }));
  }, []);

  const updateCustomer = useCallback((id, patch) => {
    setData((d) => ({ ...d, customers: d.customers.map((c) => c.id === id ? { ...c, ...patch } : c) }));
  }, []);

  // Add a product/service and map it to the selected customers (bidirectional link).
  const addProduct = useCallback((prod, customerIds = []) => {
    setData((d) => {
      const newProd = {
        id: (prod.code && prod.code.trim()) || `PR-${String(d.products.length + 1).padStart(3, "0")}`,
        name: (prod.name && prod.name.trim()) || "New product",
        status: "Active",
        customers: customerIds.length,
        openTickets: 0,
        created: todayStr(),
        desc: prod.desc || "",
      };
      return {
        ...d,
        products: [...d.products, newProd],
        customers: d.customers.map((c) =>
          customerIds.includes(c.id) && !c.products.includes(newProd.name)
            ? { ...c, products: [...c.products, newProd.name] } : c),
        license: { ...d.license, products: { ...d.license.products, used: d.license.products.used + 1 } },
      };
    });
  }, []);

  // Add a customer and assign the selected products (bidirectional link).
  const addCustomer = useCallback((cust, productNames = []) => {
    setData((d) => {
      const prefix = ((cust.name || "CUS").replace(/[^a-zA-Z]/g, "").slice(0, 3).toUpperCase() || "CUS").padEnd(3, "X");
      const newCust = {
        id: `${prefix}-${String(d.customers.length + 1).padStart(3, "0")}`,
        name: (cust.name && cust.name.trim()) || "New customer",
        status: "Active",
        reps: 0, openTickets: 0, totalTickets: 0,
        products: [...productNames],
        email: cust.email || "", phone: cust.phone || "", address: cust.address || "",
        created: todayStr(),
      };
      return {
        ...d,
        customers: [...d.customers, newCust],
        products: d.products.map((p) =>
          productNames.includes(p.name) ? { ...p, customers: p.customers + 1 } : p),
        license: { ...d.license, customers: { ...d.license.customers, used: d.license.customers.used + 1 } },
      };
    });
  }, []);

  const updateUser = useCallback((email, patch) => {
    setData((d) => ({ ...d, users: d.users.map((u) => u.email === email ? { ...u, ...patch } : u) }));
  }, []);

  // ── Audit trail (live capture) ──
  const addAudit = useCallback((action, target, type) => {
    setData((d) => ({ ...d, audit: [auditEntry(action, target, type), ...d.audit] }));
  }, []);

  // ── Escalation ──
  const escalateTicket = useCallback((id, level) => {
    setData((d) => {
      const tier = d.hierarchy[level - 1];
      if (!tier) return d;
      return {
        ...d,
        tickets: d.tickets.map((t) => t.id === id ? {
          ...t,
          escalation: { level, to: tier.name, title: tier.title },
          history: [...(t.history || []), { time: fmtTime(new Date()), text: `Escalated to ${tier.title} (${tier.name})`, tone: "warn" }],
        } : t),
        audit: [auditEntry(`Escalated ${id} to ${tier.title}`, id, "escalated"), ...d.audit],
      };
    });
  }, []);

  // ── Role management ──
  const addRole = useCallback((role) => {
    setData((d) => {
      const slug = String(role.name || "role").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      const key = `custom-${slug || "role"}-${d.roleDefs.length + 1}`;
      const def = { key, name: role.name, desc: role.desc || "", system: false, perms: role.perms || [] };
      return {
        ...d,
        roleDefs: [...d.roleDefs, def],
        roles: d.roles.includes(role.name) ? d.roles : [...d.roles, role.name],
        audit: [auditEntry(`Created role "${role.name}"`, null, "role"), ...d.audit],
      };
    });
  }, []);

  const updateRole = useCallback((key, patch) => {
    setData((d) => {
      const prev = d.roleDefs.find((r) => r.key === key);
      const renamed = patch.name && prev && patch.name !== prev.name;
      return {
        ...d,
        roleDefs: d.roleDefs.map((r) => r.key === key ? { ...r, ...patch } : r),
        roles: renamed ? d.roles.map((n) => n === prev.name ? patch.name : n) : d.roles,
        audit: [auditEntry(`Updated role "${patch.name || prev?.name || key}"`, null, "role"), ...d.audit],
      };
    });
  }, []);

  const deleteRole = useCallback((key) => {
    setData((d) => {
      const r = d.roleDefs.find((x) => x.key === key);
      return {
        ...d,
        roleDefs: d.roleDefs.filter((x) => x.key !== key),
        roles: r ? d.roles.filter((n) => n !== r.name) : d.roles,
        audit: [auditEntry(`Deleted role "${r?.name || key}"`, null, "role"), ...d.audit],
      };
    });
  }, []);

  // ── Ticket forms ──
  const addForm = useCallback((form) => {
    setData((d) => {
      const id = `FRM-${String(d.forms.length + 1).padStart(3, "0")}`;
      const def = {
        id, name: form.name || "Untitled form", status: "Active", isDefault: false,
        products: form.products || [], submissions: 0,
        fields: form.fieldDefs ? form.fieldDefs.length : (form.fields || 0),
        fieldDefs: form.fieldDefs || null, updated: todayStr(),
      };
      return {
        ...d,
        forms: [...d.forms, def],
        audit: [auditEntry(`${form._imported ? "Imported" : "Created"} ticket form "${def.name}"`, id, "created"), ...d.audit],
      };
    });
  }, []);

  const updateForm = useCallback((id, patch) => {
    setData((d) => ({
      ...d,
      forms: d.forms.map((f) => f.id === id ? { ...f, ...patch, updated: todayStr() } : f),
      audit: [auditEntry(`Updated ticket form "${patch.name || id}"`, id, "updated"), ...d.audit],
    }));
  }, []);

  const value = useMemo(() => ({
    data, role, setRole, emptyMode, setEmptyMode,
    updateTicket, addTicketMessage, addTicket, updateCustomer, updateUser, addProduct, addCustomer,
    addAudit, escalateTicket, addRole, updateRole, deleteRole, addForm, updateForm,
  }), [data, role, emptyMode, updateTicket, addTicketMessage, addTicket, updateCustomer, updateUser, addProduct, addCustomer, addAudit, escalateTicket, addRole, updateRole, deleteRole, addForm, updateForm]);

  return <TenantCtx.Provider value={value}>{children}</TenantCtx.Provider>;
};

Object.assign(window, { TENANT, STATUS_LIST, PRIORITY_LIST, TenantStoreProvider, useTenant });

// ===== tenant-layout.jsx =====
// tenant-layout.jsx — sidebar, topbar, layout shell for tenant portal

const TENANT_NAV = [
  { key: "dashboard", label: "Dashboard", icon: "dashboard", route: "/dashboard" },
  { key: "tickets", label: "Tickets", icon: "ticket", route: "/tickets" },
  { key: "customers", label: "Customers", icon: "users", route: "/customers" },
  { key: "products", label: "Products & Services", icon: "box", route: "/products" },
  { key: "forms", label: "Ticket Forms", icon: "form", route: "/forms" },
  { key: "reports", label: "Reports", icon: "chart", route: "/reports" },
  { key: "audit", label: "Audit Trail", icon: "history", route: "/audit" },
  { key: "settings", label: "Settings", icon: "settings", route: "/settings", children: [
    { key: "settings-general", label: "General", icon: "settings", route: "/settings" },
    { key: "users", label: "Users & Roles", icon: "shield", route: "/users" },
    { key: "license", label: "License Usage", icon: "gauge", route: "/license" },
  ] },
];

// Flattened leaf list (used when the sidebar is collapsed to icons only).
const TENANT_NAV_FLAT = TENANT_NAV.flatMap((it) => it.children ? it.children : [it]);

const Sidebar = ({ route, navigate, collapsed, onToggle }) => {
  const { data, role, setRole } = useTenant();
  const [openGroups, setOpenGroups] = useState({});
  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-brand">
        <Logo size={30}/>
        <span className="sidebar-label" style={{ flex: 1 }}>HelpDesk</span>
        <button className="kebab-btn" onClick={onToggle} title={collapsed ? "Expand" : "Collapse"} style={{ color: "var(--sidebar-fg-muted)" }}>
          <Icon name={collapsed ? "chevron-right" : "sidebar"} size={16}/>
        </button>
      </div>
      <nav className="sidebar-nav">
        {collapsed
          ? TENANT_NAV_FLAT.map((it) => (
              <a key={it.key} className={`nav-item ${route.startsWith(it.route) ? "active" : ""}`} onClick={() => navigate(it.route)} title={it.label}>
                <Icon name={it.icon} size={17} stroke={1.7}/>
              </a>
            ))
          : TENANT_NAV.map((it) => {
              if (it.children) {
                const childActive = it.children.some((c) => route.startsWith(c.route));
                const expanded = openGroups[it.key] !== undefined ? openGroups[it.key] : childActive;
                return (
                  <div key={it.key}>
                    <a className={`nav-item ${childActive && !expanded ? "active" : ""}`} onClick={() => setOpenGroups((g) => ({ ...g, [it.key]: !expanded }))}>
                      <Icon name={it.icon} size={17} stroke={1.7}/>
                      <span className="sidebar-label">{it.label}</span>
                      <Icon name={expanded ? "chevron-down" : "chevron-right"} size={14} style={{ marginLeft: "auto", opacity: 0.7 }}/>
                    </a>
                    {expanded ? (
                      <div className="nav-group">
                        {it.children.map((c) => (
                          <a key={c.key} className={`nav-item sub ${route.startsWith(c.route) ? "active" : ""}`} onClick={() => navigate(c.route)}>
                            <Icon name={c.icon} size={15} stroke={1.7}/>
                            <span className="sidebar-label">{c.label}</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }
              return (
                <a key={it.key} className={`nav-item ${route.startsWith(it.route) ? "active" : ""}`} onClick={() => navigate(it.route)}>
                  <Icon name={it.icon} size={17} stroke={1.7}/>
                  <span className="sidebar-label">{it.label}</span>
                  {it.key === "tickets" ? <span className="nav-badge">7</span> : null}
                </a>
              );
            })}
      </nav>
      <div className="sidebar-foot">
        <Avatar name={data.workspace.name} size="md" style={{ background: "rgba(255,255,255,0.12)", color: "var(--sidebar-fg)", border: "1px solid var(--sidebar-border)" }}/>
        <div className="ws-info">
          <div className="ws-name">{data.workspace.name}</div>
          <div className="ws-user">{data.currentUser.name}</div>
        </div>
        {!collapsed ? (
          <button className="kebab-btn" title="Sign out" style={{ color: "var(--sidebar-fg-muted)" }} onClick={() => navigate("/login")}><Icon name="logout" size={15}/></button>
        ) : null}
      </div>
    </aside>
  );
};

const RoleChip = () => {
  const { role, setRole, data } = useTenant();
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useClickAway(ref, () => setOpen(false));
  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button className="role-chip" onClick={() => setOpen((o) => !o)}>
        <span className="role-dot"/>
        <span>{role}</span>
        <Icon name="chevron-down" size={12}/>
      </button>
      {open ? (
        <div className="dropdown" style={{ right: 0, top: "100%", marginTop: 6, minWidth: 220 }}>
          <div className="dropdown-hd">Switch role view</div>
          {data.roles.map((r) => (
            <div key={r} className={`ddi ${r === role ? "sel" : ""}`} onClick={() => { setRole(r); setOpen(false); }}>{r}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const TopBar = ({ route }) => {
  const [showNotif, setShowNotif] = useState(false);
  const { data } = useTenant();
  const navigate = (to) => { window.location.hash = to; };
  return (
    <header className="topbar">
      <div className="topbar-search">
        <div className="input-wrap">
          <span className="input-icon"><Icon name="search" size={15}/></span>
          <input className="input has-icon" style={{ height: 36 }} placeholder="Search tickets, customers, users..."/>
        </div>
      </div>
      <div className="topbar-actions">
        <span className="kbd">⌘K</span>
        <RoleChip/>
        <div style={{ position: "relative" }}>
          <button className="icon-btn" onClick={() => setShowNotif((s) => !s)} aria-label="Notifications">
            <Icon name="bell" size={17}/>
            <span className="dot-badge">3</span>
          </button>
          {showNotif ? (
            <NotificationPanel items={data.notifications} onItemClick={(n) => { setShowNotif(false); navigate(n.route); }} onClose={() => setShowNotif(false)}/>
          ) : null}
        </div>
        <Avatar name={data.currentUser.name} size="md"/>
      </div>
    </header>
  );
};

const TenantLayout = ({ route, children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = (to) => { window.location.hash = to; };
  return (
    <div className="page">
      <Sidebar route={route} navigate={navigate} collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)}/>
      <div className="main">
        <TopBar route={route}/>
        <div className="main-body">{children}</div>
      </div>
    </div>
  );
};

// ─── Login screen (tenant) ───────────────────────────────────────────────────
const TenantLogin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("nnamdi@peerless.io");
  const [pwd, setPwd] = useState("••••••••");
  const onSubmit = (e) => {
    e.preventDefault();
    window.location.hash = "/dashboard";
  };
  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={onSubmit}>
        <div className="brand"><Logo size={32}/> HelpDesk</div>
        <p className="sublabel">Sign in to your workspace</p>
        <div className="field">
          <label className="label">Email address</label>
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" required/>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="pwd-wrap">
            <input className="input" type={show ? "text" : "password"} value={pwd} onChange={(e) => setPwd(e.target.value)} required style={{ paddingRight: 40 }}/>
            <button type="button" className="pwd-toggle" onClick={() => setShow((s) => !s)} aria-label={show ? "Hide password" : "Show password"}>
              <Icon name={show ? "eye-off" : "eye"} size={16}/>
            </button>
          </div>
        </div>
        <Button variant="primary" block type="submit" style={{ marginTop: 8, height: 42 }}>Sign in</Button>
        <a className="forgot">Forgot your password?</a>
        <p className="auth-foot">Don't have an account? Contact your administrator.</p>
      </form>
    </div>
  );
};

Object.assign(window, { TenantLayout, TenantLogin, TENANT_NAV });

// ===== tenant-screens-a.jsx =====
// tenant-screens-a.jsx — Dashboard, Tickets List, Ticket Detail, Create Ticket

// ═══ Dashboard ═══════════════════════════════════════════════════════════════
const TenantDashboard = () => {
  const { data, emptyMode } = useTenant();
  const navigate = (to) => { window.location.hash = to; };
  const recentTickets = data.tickets.slice(0, 5);
  const nearLimit = data.tickets.filter((t) => ["New", "Open", "In Progress", "Pending Customer"].includes(t.status)).slice(0, 5);

  if (emptyMode) {
    return (
      <>
        <div className="page-hd">
          <div>
            <h1>Good morning, Nnamdi <span className="confetti-emoji">👋</span></h1>
            <p className="sub">Welcome to Peerless FinTech's workspace.</p>
          </div>
          <Button variant="primary" icon="plus" onClick={() => navigate("/tickets/new")}>Create Ticket</Button>
        </div>
        <Card>
          <EmptyState icon="ticket" title="No tickets yet" desc="When customers raise tickets, they'll appear here. Start by creating one manually or invite customer representatives." action={<Button variant="primary" icon="plus" onClick={() => navigate("/tickets/new")}>Create your first ticket</Button>}/>
        </Card>
      </>
    );
  }

  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Good morning, Nnamdi <span className="confetti-emoji">👋</span></h1>
          <p className="sub">Here's what's happening across Peerless FinTech today.</p>
        </div>
        <div className="actions">
          <Button variant="secondary" icon="download" size="sm">Export</Button>
          <Button variant="primary" icon="plus" onClick={() => navigate("/tickets/new")}>Create Ticket</Button>
        </div>
      </div>

      <div className="stat-grid">
        <StatCard label="Open Tickets" value="38" trend="↑ 12% this week" trendDir="up" sparkData={[20,28,24,30,32,29,38]}/>
        <StatCard label="Resolved Today" value="14" trend="↑ from yesterday" trendDir="up" sparkData={[8,11,9,12,10,11,14]} sparkColor="var(--chart-2)"/>
        <StatCard label="Avg. Response Time" value="4.2 hrs" sub="vs 5.1 hrs last week" sparkData={[5.1,5.0,4.8,4.6,4.5,4.4,4.2]} sparkColor="var(--chart-3)"/>
        <StatCard label="Unassigned" value="7" trend="Needs attention" trendDir="flat" sparkData={[2,3,4,5,6,6,7]} sparkColor="var(--chart-4)"/>
      </div>

      <div className="two-col-7-5" style={{ marginBottom: 16 }}>
        <Card title="Ticket activity" action={<a className="link" style={{ fontSize: 12.5, color: "var(--text-muted)", cursor: "pointer" }} onClick={() => navigate("/tickets")}>View all →</a>} pad={false}>
          <table className="tbl">
            <thead><tr>
              <th>Ticket</th><th>Subject</th><th>Customer</th><th>Priority</th><th>Status</th><th>Agent</th>
            </tr></thead>
            <tbody>
              {recentTickets.map((t) => (
                <tr key={t.id} className="clickable" onClick={() => navigate("/tickets/" + t.id)}>
                  <td className="mono" style={{ fontSize: 12.5, fontWeight: 600 }}>{t.id}</td>
                  <td style={{ fontWeight: 500 }}>{t.subject}</td>
                  <td>{t.customer}</td>
                  <td><Badge status={t.priority}>{t.priority}</Badge></td>
                  <td><Badge status={t.status}>{t.status}</Badge></td>
                  <td>{t.agent ? <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Avatar name={t.agent} size="sm"/> {t.agent.split(" ")[0]}</span> : <span style={{ color: "var(--text-subtle)", fontStyle: "italic" }}>Unassigned</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        <Card title="License usage" action={<a className="link" style={{ fontSize: 12.5, color: "var(--text-muted)", cursor: "pointer" }} onClick={() => navigate("/license")}>Details →</a>}>
          <ProgressBar label="Customers" value={data.license.customers.used} max={data.license.customers.limit}/>
          <ProgressBar label="Tickets this period" value={data.license.tickets.used} max={data.license.tickets.limit}/>
          <ProgressBar label="Users" value={data.license.users.used} max={data.license.users.limit}/>
          <ProgressBar label="Products / Services" value={data.license.products.used} max={data.license.products.limit}/>
          <div className="banner warn" style={{ marginTop: 14, fontSize: 12.5 }}>
            <span className="icon"><Icon name="warning" size={14}/></span>
            <div>Users at 90% capacity. <b>Archive inactive users</b> or contact your administrator.</div>
          </div>
        </Card>
      </div>

      <div className="two-col-2-1">
        <Card title="Ticket reply time" action={<span className="row-tight" style={{ fontSize: 11.5, color: "var(--text-muted)" }}><span className="badge badge-active dot">↓ 18% vs last week</span></span>} pad={false}>
          <div style={{ padding: "12px 18px 4px" }}>
            <div className="chart-title">
              <span className="big mono">4h 12m</span>
              <span style={{ color: "var(--text-muted)", fontSize: 12.5 }}>average across all tickets</span>
            </div>
            <div className="chart-legend" style={{ marginBottom: 8 }}>
              <div className="li"><span className="sw" style={{ background: "var(--chart-1)" }}/>This week</div>
            </div>
            <LineChart data={{ values: [320, 290, 340, 300, 280, 310, 252, 270, 240, 245, 220, 252], labels: ["May 14","15","16","17","18","19","20","21","22","23","24","25"], unit: "mins" }} h={200}/>
          </div>
        </Card>

        <Card title="Recent activity" pad={false}>
          <div style={{ padding: "8px 18px" }}>
            <div className="activity-list">
              {[
                { tone: "dot-new", text: <><b>TKT-1042</b> reply sent to Aminu Bello</>, time: "10 mins ago" },
                { tone: "dot-warn", text: <>License usage hit <b>90%</b> for users</>, time: "2 hours ago" },
                { tone: "", text: <><b>Mubarak A.</b> resolved TKT-1038</>, time: "5 hours ago" },
                { tone: "", text: <><b>Qudus S.</b> added internal note on TKT-1042</>, time: "5 hours ago" },
                { tone: "dot-destructive", text: <>TKT-1041 marked <b>High priority</b></>, time: "Yesterday" },
              ].map((a, i) => (
                <div key={i} className="activity-item">
                  <span className={`dot ${a.tone}`}/>
                  <div className="body"><p>{a.text}</p><span className="time">{a.time}</span></div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

// ═══ Tickets List ════════════════════════════════════════════════════════════
// Rank maps + comparators for in-table sorting
const PRIO_RANK = { Low: 1, Medium: 2, High: 3, Critical: 4 };
const SEV_RANK = { Minor: 1, Medium: 2, High: 3, Critical: 4 };
const parseUpdated = (s) => { const d = new Date((s || "").split(" ").slice(0, 3).join(" ")); return isNaN(d.getTime()) ? 0 : d.getTime(); };
const TICKET_SORTERS = {
  id: (a, b) => (parseInt(a.id.replace(/\D/g, ""), 10) || 0) - (parseInt(b.id.replace(/\D/g, ""), 10) || 0),
  subject: (a, b) => a.subject.localeCompare(b.subject),
  customer: (a, b) => a.customer.localeCompare(b.customer),
  priority: (a, b) => (PRIO_RANK[a.priority] || 0) - (PRIO_RANK[b.priority] || 0),
  severity: (a, b) => (SEV_RANK[a.severity] || 0) - (SEV_RANK[b.severity] || 0),
  status: (a, b) => STATUS_LIST.indexOf(a.status) - STATUS_LIST.indexOf(b.status),
  agent: (a, b) => (a.agent || "~").localeCompare(b.agent || "~"),
  updated: (a, b) => parseUpdated(a.updated) - parseUpdated(b.updated),
};

// Table header cell with optional click-to-sort and a filter dropdown.
const Th = ({ label, sortKey, sort, onSort, filter }) => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, right: 0 });
  const ref = useRef();
  const btnRef = useRef();
  useClickAway(ref, () => setOpen(false));
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    window.addEventListener("scroll", close, true);
    return () => { window.removeEventListener("resize", close); window.removeEventListener("scroll", close, true); };
  }, [open]);
  const isSorted = sortKey && sort.key === sortKey;
  const isFiltered = filter && filter.value !== filter.all;
  const toggle = () => {
    if (open) { setOpen(false); return; }
    const r = btnRef.current.getBoundingClientRect();
    setPos({ top: r.bottom + 6, right: Math.max(8, window.innerWidth - r.right) });
    setOpen(true);
  };
  return (
    <div className="th-inner">
      <button type="button" className={`th-sort ${isSorted ? "active" : ""}`} onClick={() => sortKey && onSort(sortKey)} style={{ cursor: sortKey ? "pointer" : "default" }}>
        <span>{label}</span>
        {sortKey ? <Icon name={isSorted ? (sort.dir === "asc" ? "chevron-up" : "chevron-down") : "arrow-down"} size={11} style={{ opacity: isSorted ? 0.9 : 0.25 }}/> : null}
      </button>
      {filter ? (
        <span ref={ref} style={{ display: "inline-flex" }}>
          <button ref={btnRef} type="button" className={`th-filter ${isFiltered ? "on" : ""}`} onClick={toggle} title="Filter">
            <Icon name="filter" size={12}/>{isFiltered ? <span className="th-filter-dot"/> : null}
          </button>
          {open ? (
            <div className="dropdown" style={{ position: "fixed", top: pos.top, right: pos.right, marginTop: 0, minWidth: 180, maxHeight: 280, overflow: "auto" }}>
              {filter.options.map((o) => {
                const val = typeof o === "string" ? o : o.value;
                const lbl = typeof o === "string" ? o : o.label;
                return <div key={val} className={`ddi ${filter.value === val ? "sel" : ""}`} onClick={() => { filter.set(val); setOpen(false); }}>{lbl}</div>;
              })}
            </div>
          ) : null}
        </span>
      ) : null}
    </div>
  );
};

const TicketsList = () => {
  const { data, emptyMode } = useTenant();
  const navigate = (to) => { window.location.hash = to; };
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [priority, setPriority] = useState("All");
  const [severity, setSeverity] = useState("All");
  const [customer, setCustomer] = useState("All");
  const [agentFilter, setAgentFilter] = useState("All");
  const [page, setPage] = useState(1);
  const PER = 8;

  const filtered = useMemo(() => {
    return data.tickets.filter((t) => {
      if (search && !(t.id.toLowerCase().includes(search.toLowerCase()) || t.subject.toLowerCase().includes(search.toLowerCase()) || t.customer.toLowerCase().includes(search.toLowerCase()))) return false;
      if (status !== "All" && t.status !== status) return false;
      if (priority !== "All" && t.priority !== priority) return false;
      if (severity !== "All" && t.severity !== severity) return false;
      if (customer !== "All" && t.customer !== customer) return false;
      if (agentFilter === "Unassigned" && t.agent) return false;
      if (agentFilter !== "All" && agentFilter !== "Unassigned" && t.agent !== agentFilter) return false;
      return true;
    });
  }, [data.tickets, search, status, priority, severity, customer, agentFilter]);

  // Summary counts for the stat-card strip (Total + per-status)
  const summary = useMemo(() => {
    const c = (s) => data.tickets.filter((t) => t.status === s).length;
    return [
      { label: "Total tickets", status: "All", count: data.tickets.length, dot: "#000" },
      { label: "Open", status: "Open", count: c("Open"), dot: "#5b21b6" },
      { label: "In progress", status: "In Progress", count: c("In Progress"), dot: "#92400e" },
      { label: "Pending", status: "Pending Customer", count: c("Pending Customer"), dot: "#c2410c" },
      { label: "Resolved", status: "Resolved", count: c("Resolved"), dot: "#00713a" },
      { label: "Closed", status: "Closed", count: c("Closed"), dot: "#374151" },
    ];
  }, [data.tickets]);
  const [sort, setSort] = useState({ key: null, dir: "asc" });
  const toggleSort = (key) => { setSort((s) => s.key === key ? (s.dir === "asc" ? { key, dir: "desc" } : { key: null, dir: "asc" }) : { key, dir: "asc" }); setPage(1); };

  const sorted = useMemo(() => {
    if (!sort.key || !TICKET_SORTERS[sort.key]) return filtered;
    const arr = [...filtered].sort(TICKET_SORTERS[sort.key]);
    return sort.dir === "desc" ? arr.reverse() : arr;
  }, [filtered, sort]);

  const anyFilter = search || status !== "All" || priority !== "All" || severity !== "All" || customer !== "All" || agentFilter !== "All" || sort.key;
  const resetFilters = () => { setSearch(""); setStatus("All"); setPriority("All"); setSeverity("All"); setCustomer("All"); setAgentFilter("All"); setSort({ key: null, dir: "asc" }); setPage(1); };

  const totalPages = Math.max(1, Math.ceil(sorted.length / PER));
  const pageRows = sorted.slice((page - 1) * PER, page * PER);
  const activeCustomers = data.customers.filter((c) => c.status === "Active").map((c) => c.name);

  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Tickets</h1>
          <p className="sub">{data.tickets.length} total · {filtered.length} matching</p>
        </div>
        <div className="actions">
          <Button variant="ghost" icon="download" size="sm">Export CSV</Button>
          <Button variant="primary" icon="plus" onClick={() => navigate("/tickets/new")}>Create Ticket</Button>
        </div>
      </div>

      <div className="ticket-stats">
        {summary.map((s) => (
          <button key={s.label} className={`tk-stat ${status === s.status ? "active" : ""}`} onClick={() => { setStatus(s.status); setPage(1); }}>
            <div className="tk-stat-val">{s.count}</div>
            <div className="tk-stat-lbl"><span className="tk-dot" style={{ background: s.dot }}/> {s.label}</div>
          </button>
        ))}
      </div>

      <div className="tbl-wrap tickets-table-wrap">
        <div className="tbl-toolbar">
          <div className="input-wrap" style={{ flex: 1, maxWidth: 380 }}>
            <span className="input-icon"><Icon name="search" size={15}/></span>
            <input className="input has-icon" style={{ height: 36 }} placeholder="Search by ID, subject, or customer..." value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }}/>
          </div>
          <div className="spacer"/>
          <span style={{ fontSize: 12.5, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{sorted.length} of {data.tickets.length} tickets</span>
          {anyFilter ? <Button variant="ghost" size="sm" icon="x" onClick={resetFilters}>Reset</Button> : null}
        </div>
        {pageRows.length === 0 ? (
          <EmptyState icon="search" title="No tickets match your filters" desc="Try adjusting your filters or search terms." action={<Button variant="secondary" onClick={resetFilters}>Clear filters</Button>}/>
        ) : (
          <table className="tbl">
            <thead><tr>
              <th><Th label="Ticket" sortKey="id" sort={sort} onSort={toggleSort}/></th>
              <th><Th label="Subject" sortKey="subject" sort={sort} onSort={toggleSort}/></th>
              <th><Th label="Customer" sortKey="customer" sort={sort} onSort={toggleSort} filter={{ value: customer, set: (v) => { setCustomer(v); setPage(1); }, all: "All", options: ["All", ...activeCustomers] }}/></th>
              <th>Product</th>
              <th><Th label="Priority" sortKey="priority" sort={sort} onSort={toggleSort} filter={{ value: priority, set: (v) => { setPriority(v); setPage(1); }, all: "All", options: ["All", ...PRIORITY_LIST] }}/></th>
              <th><Th label="Severity" sortKey="severity" sort={sort} onSort={toggleSort} filter={{ value: severity, set: (v) => { setSeverity(v); setPage(1); }, all: "All", options: ["All", ...SEVERITY_LIST] }}/></th>
              <th><Th label="Status" sortKey="status" sort={sort} onSort={toggleSort} filter={{ value: status, set: (v) => { setStatus(v); setPage(1); }, all: "All", options: ["All", ...STATUS_LIST] }}/></th>
              <th><Th label="Agent" sortKey="agent" sort={sort} onSort={toggleSort} filter={{ value: agentFilter, set: (v) => { setAgentFilter(v); setPage(1); }, all: "All", options: ["All", "Unassigned", ...data.agents.map((a) => a.name)] }}/></th>
              <th><Th label="Updated" sortKey="updated" sort={sort} onSort={toggleSort}/></th>
              <th></th>
            </tr></thead>
            <tbody>
              {pageRows.map((t) => (
                <tr key={t.id} className="clickable" onClick={() => navigate("/tickets/" + t.id)}>
                  <td className="mono" style={{ fontWeight: 600, fontSize: 12.5 }}>{t.id}</td>
                  <td style={{ maxWidth: 230 }}>
                    <div style={{ fontWeight: 500, lineHeight: 1.35, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{t.subject}</div>
                    <div style={{ fontSize: 11.5, color: "var(--text-muted)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.category || "General"}{t.rep ? ` · ${t.rep}` : ""}</div>
                  </td>
                  <td>{t.customer}</td>
                  <td><span className="chip">{t.product}</span></td>
                  <td><Badge status={t.priority}>{t.priority}</Badge></td>
                  <td><Badge status={t.severity}>{t.severity}</Badge></td>
                  <td><Badge status={t.status}>{t.status}</Badge></td>
                  <td>{t.agent ? <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Avatar name={t.agent} size="sm"/> <span style={{ fontSize: 13 }}>{t.agent.split(" ")[0]}</span></span> : <span style={{ color: "var(--text-subtle)", fontStyle: "italic", fontSize: 13 }}>Unassigned</span>}</td>
                  <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.updated.split(" ").slice(0, 3).join(" ")}</td>
                  <td><div onClick={(e) => e.stopPropagation()}><KebabMenu items={[
                    { label: "View ticket", icon: "external", onClick: () => navigate("/tickets/" + t.id) },
                    { label: "Assign agent", icon: "user" },
                    { label: "Update status", icon: "refresh" },
                    { sep: true },
                    { label: "Archive ticket", icon: "archive", destructive: true },
                  ]}/></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {pageRows.length > 0 ? (
          <Pagination page={page} totalPages={totalPages} onPage={setPage} summary={`Showing ${(page - 1) * PER + 1}–${Math.min(page * PER, filtered.length)} of ${filtered.length} tickets`}/>
        ) : null}
      </div>
    </>
  );
};

// ═══ Ticket Detail ═══════════════════════════════════════════════════════════
const TicketDetail = ({ id }) => {
  const { data, updateTicket, addTicketMessage, addAudit } = useTenant();
  const toast = useToast();
  const navigate = (to) => { window.location.hash = to; };
  const t = data.tickets.find((x) => x.id === id);
  const [replyTab, setReplyTab] = useState("public");
  const [reply, setReply] = useState("");
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [assignOpen, setAssignOpen] = useState(false);
  const stRef = useRef(); const asRef = useRef();
  useClickAway(stRef, () => setStatusOpen(false));
  useClickAway(asRef, () => setAssignOpen(false));

  if (!t) return (
    <Card><EmptyState icon="ticket" title="Ticket not found" desc={`We couldn't find ${id}.`} action={<Button variant="secondary" onClick={() => navigate("/tickets")}>Back to tickets</Button>}/></Card>
  );

  const sendReply = () => {
    if (!reply.trim()) return;
    addTicketMessage(t.id, {
      kind: replyTab === "internal" ? "internal" : "agent",
      name: "Nnamdi Eze",
      role: "Client Administrator, Peerless FinTech",
      time: `${fmtDate(new Date())}, ${fmtTime(new Date())}`,
      body: reply.trim(),
    });
    addAudit(replyTab === "internal" ? `Added an internal note to ${t.id}` : `Replied to customer on ${t.id}`, t.id, "reply");
    setReply("");
    toast.success(replyTab === "internal" ? "Internal note added" : "Reply sent to customer", "Updated");
  };

  return (
    <>
      <div className="crumbs">
        <a onClick={() => navigate("/tickets")}>← All tickets</a>
      </div>

      <div className="page-hd" style={{ alignItems: "flex-start" }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div className="row" style={{ gap: 8, marginBottom: 4 }}>
            <span className="mono" style={{ fontSize: 13, fontWeight: 600, color: "var(--text-muted)" }}>{t.id}</span>
            <Badge status={t.status}>{t.status}</Badge>
            <Badge status={t.priority}>{t.priority}</Badge>
            {t.severity ? <Badge status={t.severity}>Severity: {t.severity}</Badge> : null}
          </div>
          <h1 style={{ marginTop: 2 }}>{t.subject}</h1>
        </div>
        <div className="actions" style={{ flexShrink: 0 }}>
          <div style={{ position: "relative" }} ref={stRef}>
            <Button variant="secondary" iconRight="chevron-down" size="sm" onClick={() => setStatusOpen((o) => !o)}>Update status</Button>
            {statusOpen ? (
              <div className="dropdown" style={{ right: 0, top: "100%", marginTop: 4 }}>
                {STATUS_LIST.map((s) => (
                  <div key={s} className={`ddi ${s === t.status ? "sel" : ""}`} onClick={() => { updateTicket(t.id, { status: s }); addAudit(`Changed status of ${t.id} to ${s}`, t.id, "updated"); setStatusOpen(false); toast.success(`Status set to ${s}`); }}>
                    <Badge status={s}>{s}</Badge>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <div style={{ position: "relative" }} ref={asRef}>
            <Button variant="secondary" iconRight="chevron-down" size="sm" onClick={() => setAssignOpen((o) => !o)}>Assign agent</Button>
            {assignOpen ? (
              <div className="dropdown" style={{ right: 0, top: "100%", marginTop: 4, minWidth: 220 }}>
                <div className="ddi" onClick={() => { updateTicket(t.id, { agent: null }); addAudit(`Unassigned ${t.id}`, t.id, "assigned"); setAssignOpen(false); toast.success("Ticket unassigned"); }}>Unassigned</div>
                {data.agents.map((a) => (
                  <div key={a.email} className={`ddi ${a.name === t.agent ? "sel" : ""}`} onClick={() => { updateTicket(t.id, { agent: a.name }); addAudit(`Assigned ${t.id} to ${a.name}`, t.id, "assigned"); setAssignOpen(false); toast.success(`Assigned to ${a.name}`); }}>
                    <Avatar name={a.name} size="sm"/><span>{a.name}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
          <Button variant="destructive" icon="archive" size="sm" onClick={() => setArchiveOpen(true)}>Archive</Button>
        </div>
      </div>

      <div className="two-col-7-3">
        <div>
          {(t.messages || []).map((m, i) => (
            <div key={i} className={`msg ${m.kind === "internal" ? "internal" : ""}`}>
              <div className="msg-hd">
                <Avatar name={m.name} size="md"/>
                <div>
                  <div className="name">{m.name}</div>
                  <div className="role">{m.role}</div>
                </div>
                <span className="time mono">{m.time}</span>
              </div>
              <div className="msg-body">{m.body}</div>
              {m.attachment ? (
                <div className="attachment"><Icon name="paperclip" size={13}/><span>{m.attachment.name}</span><span className="size">{m.attachment.size}</span></div>
              ) : null}
              <div className="msg-foot">
                {m.kind === "internal" ? <span className="msg-tag internal"><Icon name="lock" size={11}/> Internal note — only visible to your team</span>
                : m.kind === "agent" ? <span className="msg-tag"><Icon name="globe" size={11}/> Public reply</span>
                : <span className="msg-tag"><Icon name="user" size={11}/> Customer message</span>}
              </div>
            </div>
          ))}

          <div className={`composer ${replyTab === "internal" ? "internal" : ""}`}>
            <div className="composer-tabs">
              <button className={`composer-tab ${replyTab === "public" ? "active" : ""}`} onClick={() => setReplyTab("public")}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="globe" size={12}/> Reply to customer</span>
              </button>
              <button className={`composer-tab ${replyTab === "internal" ? "active" : ""}`} onClick={() => setReplyTab("internal")}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="lock" size={12}/> Internal note</span>
              </button>
            </div>
            <div className="composer-body">
              <textarea placeholder={replyTab === "internal" ? "Add a note for your team (customer will not see this)..." : "Type your reply to the customer..."} value={reply} onChange={(e) => setReply(e.target.value)}/>
            </div>
            <div className="composer-foot">
              <span className="meta">
                {replyTab === "internal" ? <><Icon name="lock" size={12}/> This note is only visible to your team</> : <><Icon name="globe" size={12}/> Public — visible to customer</>}
              </span>
              <div className="row" style={{ gap: 8 }}>
                <button className="btn btn-ghost btn-sm"><Icon name="paperclip" size={14}/></button>
                <Button variant="primary" size="sm" icon="send" onClick={sendReply} disabled={!reply.trim()}>Send</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="side-panel">
          <div className="side-card">
            <div className="side-hd"><b>Customer</b></div>
            <div className="side-bd">
              <dl className="dl">
                <dt>Customer</dt><dd><a onClick={() => navigate("/customers/" + t.customerId)} style={{ color: "var(--fg)", fontWeight: 500, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 2 }}>{t.customer}</a></dd>
                <dt>Representative</dt><dd>{t.rep}</dd>
                <dt>Email</dt><dd className="mono" style={{ fontSize: 12 }}>{t.repEmail || `${t.rep?.split(" ")[0].toLowerCase()}@${t.customer?.toLowerCase().replace(/\s+/g, "")}.com`}</dd>
                <dt>Product</dt><dd><span className="chip">{t.product}</span></dd>
              </dl>
            </div>
          </div>
          <div className="side-card">
            <div className="side-hd"><b>Metadata</b></div>
            <div className="side-bd">
              <dl className="dl">
                <dt>Ticket ID</dt><dd className="mono">{t.id}</dd>
                <dt>Created</dt><dd>{t.created}</dd>
                <dt>Last update</dt><dd>{t.updated}</dd>
                <dt>Agent</dt><dd>{t.agent ? <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Avatar name={t.agent} size="sm"/> {t.agent}</span> : <span style={{ color: "var(--text-subtle)", fontStyle: "italic" }}>Unassigned</span>}</dd>
                <dt>Category</dt><dd>{t.category || "Other"}</dd>
                <dt>Priority</dt><dd><Badge status={t.priority}>{t.priority}</Badge></dd>
                <dt>Severity</dt><dd>{t.severity ? <Badge status={t.severity}>{t.severity}</Badge> : "—"}</dd>
              </dl>
            </div>
          </div>
          <EscalationCard t={t}/>
          <div className="side-card">
            <div className="side-hd"><b>History</b></div>
            <div className="side-bd">
              <div className="timeline">
                {(t.history || []).map((h, i) => (
                  <div key={i} className="timeline-item">
                    <span className={`tldot ${h.tone}`}/>
                    <div className="tl-body"><div>{h.text}</div><div className="tl-time mono">{h.time}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {(t.messages?.[0]?.attachment) ? (
            <div className="side-card">
              <div className="side-hd"><b>Attachments</b></div>
              <div className="side-bd">
                <div className="attachment" style={{ marginTop: 0 }}><Icon name="paperclip" size={13}/><span>{t.messages[0].attachment.name}</span><span className="size">{t.messages[0].attachment.size}</span></div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <Modal open={archiveOpen} onClose={() => setArchiveOpen(false)} title={`Archive ${t.id}?`}
        actions={<>
          <Button variant="ghost" onClick={() => setArchiveOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={() => { setArchiveOpen(false); updateTicket(t.id, { status: "Closed" }); addAudit(`Archived ${t.id}`, t.id, "archived"); toast.success(`${t.id} archived. You can restore it from the archive.`); navigate("/tickets"); }}>Archive ticket</Button>
        </>}>
        <p>Archived tickets are hidden from the main view but remain searchable. This action can be undone within 30 days.</p>
      </Modal>
    </>
  );
};

// ═══ Create Ticket ═══════════════════════════════════════════════════════════
const CreateTicket = () => {
  const { data, addTicket } = useTenant();
  const toast = useToast();
  const navigate = (to) => { window.location.hash = to; };
  const [form, setForm] = useState({ customer: "", product: "", subject: "", description: "", priority: "Medium", severity: "Medium", category: "", agent: "" });
  const [errs, setErrs] = useState({});

  const validate = () => {
    const e = {};
    if (!form.customer) e.customer = "Pick a customer";
    if (!form.product) e.product = "Pick a product or service";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.description.trim()) e.description = "Description is required";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const id = "TKT-" + (1043 + Math.floor(Math.random() * 100));
    addTicket({
      id, subject: form.subject, customer: form.customer, customerId: data.customers.find((c) => c.name === form.customer)?.id,
      product: form.product, priority: form.priority, severity: form.severity, status: "New", agent: form.agent || null,
      rep: "Aminu Bello", category: form.category, created: `${fmtDate(new Date())} ${fmtTime(new Date())}`, updated: `${fmtDate(new Date())} ${fmtTime(new Date())}`,
      messages: [{ kind: "agent", name: "Nnamdi Eze", role: "Client Administrator, Peerless FinTech", time: `${fmtDate(new Date())}, ${fmtTime(new Date())}`, body: form.description }],
      history: [{ time: fmtTime(new Date()), text: "Ticket created", tone: "" }],
    });
    toast.success(`Ticket ${id} created successfully.`, "Ticket created");
    navigate("/tickets/" + id);
  };

  const ticketsRemaining = data.license.tickets.limit - data.license.tickets.used;
  const showWarn = ticketsRemaining < 100;

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      <div className="crumbs"><a onClick={() => navigate("/tickets")}>Tickets</a><span className="sep">/</span><span>New ticket</span></div>
      <div className="page-hd">
        <div>
          <h1>Create ticket</h1>
          <p className="sub">Manually log a ticket on behalf of a customer.</p>
        </div>
      </div>

      {showWarn ? (
        <div className="banner warn" style={{ marginBottom: 16 }}>
          <span className="icon"><Icon name="warning" size={14}/></span>
          <div>You have <b>{ticketsRemaining.toLocaleString()} tickets</b> remaining this billing period.</div>
        </div>
      ) : null}

      <form onSubmit={submit}>
        <Card title="Ticket details">
          <div className="two-col-1-1">
            <div className="field">
              <label className="label">Customer <span className="required">*</span></label>
              <select className="select" value={form.customer} onChange={(e) => setForm({ ...form, customer: e.target.value, product: "" })} style={{ borderColor: errs.customer ? "var(--destructive)" : "" }}>
                <option value="">Select a customer</option>
                {data.customers.filter((c) => c.status === "Active").map((c) => <option key={c.id}>{c.name}</option>)}
              </select>
              {errs.customer ? <div style={{ color: "var(--destructive)", fontSize: 12, marginTop: 4 }}>{errs.customer}</div> : null}
            </div>
            <div className="field">
              <label className="label">Product / Service <span className="required">*</span></label>
              <select className="select" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} style={{ borderColor: errs.product ? "var(--destructive)" : "" }} disabled={!form.customer}>
                <option value="">{form.customer ? "Select a product" : "Pick a customer first"}</option>
                {(data.customers.find((c) => c.name === form.customer)?.products || []).map((p) => <option key={p}>{p}</option>)}
              </select>
              {errs.product ? <div style={{ color: "var(--destructive)", fontSize: 12, marginTop: 4 }}>{errs.product}</div> : null}
            </div>
          </div>
          <div className="field" style={{ marginTop: 14 }}>
            <label className="label">Subject <span className="required">*</span></label>
            <input className="input" placeholder="e.g. Unable to log in to mobile app" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} style={{ borderColor: errs.subject ? "var(--destructive)" : "" }}/>
            {errs.subject ? <div style={{ color: "var(--destructive)", fontSize: 12, marginTop: 4 }}>{errs.subject}</div> : null}
          </div>
          <div className="field" style={{ marginTop: 14 }}>
            <label className="label">Description <span className="required">*</span></label>
            <textarea className="textarea" rows={5} placeholder="Describe the issue with as much detail as possible..." value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} style={{ borderColor: errs.description ? "var(--destructive)" : "" }}/>
            {errs.description ? <div style={{ color: "var(--destructive)", fontSize: 12, marginTop: 4 }}>{errs.description}</div> : null}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginTop: 14 }}>
            <div className="field">
              <label className="label">Priority <span className="required">*</span></label>
              <select className="select" value={form.priority} onChange={(e) => setForm({ ...form, priority: e.target.value })}>
                {PRIORITY_LIST.map((p) => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div className="field">
              <label className="label">Severity <span className="required">*</span></label>
              <select className="select" value={form.severity} onChange={(e) => setForm({ ...form, severity: e.target.value })}>
                {SEVERITY_LIST.map((s) => <option key={s}>{s}</option>)}
              </select>
              <div className="help">Customer impact, independent of priority.</div>
            </div>
            <div className="field">
              <label className="label">Category</label>
              <select className="select" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
                <option value="">Select category</option>
                {["Authentication","Transactions","Onboarding","API & Integration","Account Management","Other"].map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div className="field" style={{ marginTop: 14 }}>
            <label className="label">Assign to</label>
            <select className="select" value={form.agent} onChange={(e) => setForm({ ...form, agent: e.target.value })}>
              <option value="">Leave unassigned</option>
              {data.agents.map((a) => <option key={a.email}>{a.name}</option>)}
            </select>
          </div>
          <div className="field" style={{ marginTop: 14 }}>
            <label className="label">Attachments</label>
            <div className="dropzone"><Icon name="paperclip" size={18}/><div style={{ marginTop: 6 }}>Drop files here or <b style={{ color: "var(--fg)" }}>click to upload</b></div><div style={{ fontSize: 11.5, color: "var(--text-subtle)", marginTop: 4 }}>PNG, JPG, PDF, DOCX, XLSX · 10MB max per file</div></div>
          </div>
        </Card>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
          <Button variant="ghost" type="button" onClick={() => navigate("/tickets")}>Cancel</Button>
          <Button variant="primary" type="submit" icon="plus">Create ticket</Button>
        </div>
      </form>
    </div>
  );
};

Object.assign(window, { TenantDashboard, TicketsList, TicketDetail, CreateTicket });

// ===== tenant-screens-b.jsx =====
// tenant-screens-b.jsx — Customers, Customer Detail, Products, Users, License, Reports, placeholders

// ═══ Toggleable chip multi-select ════════════════════════════════════════════
const TogglePicker = ({ options, selected, onToggle, empty = "None selected" }) => (
  <div className="row" style={{ flexWrap: "wrap", gap: 6 }}>
    {options.length === 0 ? <span style={{ color: "var(--text-muted)", fontSize: 12.5 }}>{empty}</span> :
      options.map((o) => {
        const on = selected.includes(o.value);
        return (
          <button key={o.value} type="button" onClick={() => onToggle(o.value)} className="chip"
            style={{ cursor: "pointer", gap: 5, border: on ? "1px solid var(--fg)" : "1px solid var(--border)", background: on ? "var(--fg)" : "transparent", color: on ? "#fff" : "inherit", transition: "all .12s" }}>
            {on ? <Icon name="check" size={11} stroke={2.6}/> : <Icon name="plus" size={11} stroke={2}/>}{o.label}
          </button>
        );
      })}
  </div>
);

// ═══ Customers list ═════════════════════════════════════════════════════════
const CustomersList = () => {
  const { data, updateCustomer, addCustomer } = useTenant();
  const toast = useToast();
  const navigate = (to) => { window.location.hash = to; };
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [archiveTarget, setArchiveTarget] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [newCust, setNewCust] = useState({ name: "", email: "", phone: "", address: "" });
  const [custProds, setCustProds] = useState([]);
  const activeProducts = data.products.filter((p) => p.status === "Active");
  const resetAddCust = () => { setNewCust({ name: "", email: "", phone: "", address: "" }); setCustProds([]); };
  const [sort, setSort] = useState({ key: null, dir: "asc" });
  const toggleSort = (key) => setSort((s) => s.key === key ? (s.dir === "asc" ? { key, dir: "desc" } : { key: null, dir: "asc" }) : { key, dir: "asc" });

  const filtered = data.customers.filter((c) =>
    (!search || c.name.toLowerCase().includes(search.toLowerCase()) || c.id.toLowerCase().includes(search.toLowerCase()))
    && (status === "All" || c.status === status)
  );
  const SORTERS = {
    name: (a, b) => a.name.localeCompare(b.name),
    id: (a, b) => a.id.localeCompare(b.id),
    status: (a, b) => a.status.localeCompare(b.status),
    reps: (a, b) => a.reps - b.reps,
    open: (a, b) => a.openTickets - b.openTickets,
    created: (a, b) => parseUpdated(a.created) - parseUpdated(b.created),
  };
  const sorted = sort.key && SORTERS[sort.key] ? (sort.dir === "desc" ? [...filtered].sort(SORTERS[sort.key]).reverse() : [...filtered].sort(SORTERS[sort.key])) : filtered;
  const anyFilter = search || status !== "All" || sort.key;
  const resetFilters = () => { setSearch(""); setStatus("All"); setSort({ key: null, dir: "asc" }); };

  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Customers</h1>
          <p className="sub">{data.customers.filter((c) => c.status === "Active").length} active · {data.license.customers.limit - data.license.customers.used} slots remaining</p>
        </div>
        <Button variant="primary" icon="plus" onClick={() => setAddOpen(true)}>Add Customer</Button>
      </div>

      <div className="tbl-wrap table-menus">
        <div className="tbl-toolbar">
          <div className="input-wrap" style={{ flex: 1, maxWidth: 380 }}>
            <span className="input-icon"><Icon name="search" size={15}/></span>
            <input className="input has-icon" style={{ height: 36 }} placeholder="Search customers..." value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <div className="spacer"/>
          <span style={{ fontSize: 12.5, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{sorted.length} of {data.customers.length} customers</span>
          {anyFilter ? <Button variant="ghost" size="sm" icon="x" onClick={resetFilters}>Reset</Button> : null}
        </div>
        <table className="tbl">
          <thead><tr>
            <th><Th label="Customer" sortKey="name" sort={sort} onSort={toggleSort}/></th>
            <th><Th label="Code" sortKey="id" sort={sort} onSort={toggleSort}/></th>
            <th><Th label="Status" sortKey="status" sort={sort} onSort={toggleSort} filter={{ value: status, set: setStatus, all: "All", options: ["All", "Active", "Archived"] }}/></th>
            <th><Th label="Reps" sortKey="reps" sort={sort} onSort={toggleSort}/></th>
            <th><Th label="Open Tickets" sortKey="open" sort={sort} onSort={toggleSort}/></th>
            <th>Products</th>
            <th><Th label="Created" sortKey="created" sort={sort} onSort={toggleSort}/></th>
            <th></th>
          </tr></thead>
          <tbody>
            {sorted.map((c) => (
              <tr key={c.id} className={`clickable ${c.status === "Archived" ? "archived-row" : ""}`} onClick={() => navigate("/customers/" + c.id)}>
                <td style={{ fontWeight: 600 }}>{c.name}</td>
                <td className="mono" style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{c.id}</td>
                <td><Badge status={c.status}>{c.status}</Badge></td>
                <td className="mono">{c.reps}</td>
                <td className="mono">{c.openTickets}</td>
                <td>{c.products.length === 0 ? <span style={{ color: "var(--text-subtle)" }}>—</span> : (
                  <span style={{ display: "inline-flex", gap: 4, flexWrap: "wrap" }}>
                    {c.products.slice(0, 2).map((p) => <span key={p} className="chip" style={{ fontSize: 11 }}>{p}</span>)}
                    {c.products.length > 2 ? <span className="chip" style={{ fontSize: 11 }}>+{c.products.length - 2}</span> : null}
                  </span>
                )}</td>
                <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{c.created}</td>
                <td><div onClick={(e) => e.stopPropagation()}>
                  {c.status === "Archived" ? (
                    <Button variant="ghost" size="xs" onClick={() => { updateCustomer(c.id, { status: "Active" }); toast.success(`${c.name} reactivated`); }}>Reactivate</Button>
                  ) : (
                    <KebabMenu items={[
                      { label: "View", icon: "external", onClick: () => navigate("/customers/" + c.id) },
                      { label: "Edit", icon: "edit" },
                      { sep: true },
                      { label: "Archive", icon: "archive", destructive: true, onClick: () => setArchiveTarget(c) },
                    ]}/>
                  )}
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={!!archiveTarget} onClose={() => setArchiveTarget(null)} title={`Archive ${archiveTarget?.name}?`}
        actions={<>
          <Button variant="ghost" onClick={() => setArchiveTarget(null)}>Cancel</Button>
          <Button variant="destructive" onClick={() => { updateCustomer(archiveTarget.id, { status: "Archived" }); toast.success(`${archiveTarget.name} archived`); setArchiveTarget(null); }}>Archive customer</Button>
        </>}>
        <p>Archiving will prevent new tickets and new representatives under this customer. Existing tickets remain accessible.</p>
      </Modal>

      <Modal open={addOpen} onClose={() => { setAddOpen(false); resetAddCust(); }} title="Add a customer"
        actions={<>
          <Button variant="ghost" onClick={() => { setAddOpen(false); resetAddCust(); }}>Cancel</Button>
          <Button variant="primary" icon="check" onClick={() => { const nm = newCust.name || "New customer"; const n = custProds.length; addCustomer(newCust, custProds); setAddOpen(false); toast.success(`${nm} added${n ? ` with ${n} product${n === 1 ? "" : "s"} assigned` : ""}.`); resetAddCust(); }}>Create customer</Button>
        </>}>
        <p>Customers are the organisations you provide support to. Assign the products they use now — you can change this anytime.</p>
        <div className="field" style={{ marginBottom: 12 }}><label className="label">Customer name <span className="required">*</span></label><input className="input" placeholder="e.g. Kolomoni Ltd" value={newCust.name} onChange={(e) => setNewCust({ ...newCust, name: e.target.value })} autoFocus/></div>
        <div className="two-col-1-1">
          <div className="field"><label className="label">Contact email <span className="required">*</span></label><input className="input" type="email" placeholder="contact@company.com" value={newCust.email} onChange={(e) => setNewCust({ ...newCust, email: e.target.value })}/></div>
          <div className="field"><label className="label">Phone</label><input className="input" placeholder="+234 800 000 0000" value={newCust.phone} onChange={(e) => setNewCust({ ...newCust, phone: e.target.value })}/></div>
        </div>
        <div className="field" style={{ marginTop: 12 }}><label className="label">Address</label><textarea className="textarea" rows={2} placeholder="Street, city, country" value={newCust.address} onChange={(e) => setNewCust({ ...newCust, address: e.target.value })}/></div>
        <div className="field" style={{ marginTop: 12 }}>
          <label className="label">Products / services {custProds.length ? <span className="mono" style={{ color: "var(--text-muted)", fontWeight: 400 }}>· {custProds.length} selected</span> : null}</label>
          <div className="help" style={{ marginTop: -2, marginBottom: 8 }}>Tap to assign the products this customer uses.</div>
          <TogglePicker options={activeProducts.map((p) => ({ value: p.name, label: p.name }))} selected={custProds} onToggle={(v) => setCustProds((s) => s.includes(v) ? s.filter((x) => x !== v) : [...s, v])} empty="No active products yet — add one from the Products page."/>
        </div>
        <div className="banner info" style={{ marginTop: 14, fontSize: 12.5 }}><span className="icon"><Icon name="info" size={14}/></span><div><b>{data.license.customers.limit - data.license.customers.used} customer slots remaining</b> on your Enterprise plan.</div></div>
      </Modal>
    </>
  );
};

// ═══ Customer Detail ════════════════════════════════════════════════════════
const CustomerDetail = ({ id }) => {
  const { data, updateCustomer } = useTenant();
  const toast = useToast();
  const navigate = (to) => { window.location.hash = to; };
  const c = data.customers.find((x) => x.id === id);
  const [tab, setTab] = useState("overview");
  const [archiveOpen, setArchiveOpen] = useState(false);

  if (!c) return <Card><EmptyState icon="users" title="Customer not found"/></Card>;

  const tickets = data.tickets.filter((t) => t.customerId === c.id);

  return (
    <>
      <div className="crumbs"><a onClick={() => navigate("/customers")}>Customers</a><span className="sep">/</span><span>{c.name}</span></div>
      <div className="page-hd">
        <div>
          <div className="row" style={{ gap: 10 }}>
            <h1 style={{ margin: 0 }}>{c.name}</h1>
            <Badge status={c.status}>{c.status}</Badge>
          </div>
          <p className="sub mono">{c.id}</p>
        </div>
        <div className="actions">
          <Button variant="secondary" icon="edit" size="sm">Edit</Button>
          <Button variant="destructive" icon="archive" size="sm" onClick={() => setArchiveOpen(true)}>Archive</Button>
        </div>
      </div>

      <div className="tabs">
        {[["overview","Overview"],["reps","Representatives"],["tickets","Tickets"],["activity","Activity"]].map(([k,l]) => (
          <button key={k} className={`tab ${tab===k?"active":""}`} onClick={() => setTab(k)}>{l}{k==="tickets" && tickets.length ? <span className="tab-count">{tickets.length}</span> : null}</button>
        ))}
      </div>

      {tab === "overview" ? (
        <div className="two-col-1-1">
          <Card title="Profile">
            <dl className="dl" style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 10, fontSize: 13.5 }}>
              <dt style={{ color: "var(--text-muted)" }}>Name</dt><dd style={{ margin: 0, fontWeight: 500 }}>{c.name}</dd>
              <dt style={{ color: "var(--text-muted)" }}>Code</dt><dd className="mono" style={{ margin: 0 }}>{c.id}</dd>
              <dt style={{ color: "var(--text-muted)" }}>Email</dt><dd style={{ margin: 0 }}>{c.email}</dd>
              <dt style={{ color: "var(--text-muted)" }}>Phone</dt><dd className="mono" style={{ margin: 0 }}>{c.phone}</dd>
              <dt style={{ color: "var(--text-muted)" }}>Address</dt><dd style={{ margin: 0 }}>{c.address}</dd>
              <dt style={{ color: "var(--text-muted)" }}>Created</dt><dd style={{ margin: 0 }}>{c.created}</dd>
            </dl>
          </Card>
          <div>
            <Card title="Assigned products / services" className="" >
              <div className="row" style={{ flexWrap: "wrap", gap: 6 }}>
                {c.products.length === 0 ? <span style={{ color: "var(--text-muted)", fontSize: 13 }}>No products assigned</span> :
                  c.products.map((p) => <span key={p} className="chip">{p}</span>)}
              </div>
            </Card>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 16 }}>
              <StatCard label="Representatives" value={c.reps}/>
              <StatCard label="Open tickets" value={c.openTickets}/>
              <StatCard label="Total tickets" value={c.totalTickets}/>
            </div>
          </div>
        </div>
      ) : tab === "tickets" ? (
        <Card pad={false}>
          {tickets.length ? (
            <table className="tbl">
              <thead><tr><th>Ticket</th><th>Subject</th><th>Status</th><th>Priority</th><th>Updated</th></tr></thead>
              <tbody>
                {tickets.map((t) => (
                  <tr key={t.id} className="clickable" onClick={() => navigate("/tickets/" + t.id)}>
                    <td className="mono" style={{ fontWeight: 600, fontSize: 12.5 }}>{t.id}</td>
                    <td style={{ fontWeight: 500 }}>{t.subject}</td>
                    <td><Badge status={t.status}>{t.status}</Badge></td>
                    <td><Badge status={t.priority}>{t.priority}</Badge></td>
                    <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.updated.split(" ").slice(0, 3).join(" ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <EmptyState icon="ticket" title="No tickets yet" desc="This customer hasn't raised any tickets."/>}
        </Card>
      ) : tab === "reps" ? (
        <Card pad={false}>
          <table className="tbl">
            <thead><tr><th>Name</th><th>Email</th><th>Tickets</th><th>Status</th></tr></thead>
            <tbody>
              {(c.id === "KOL-001" ? [
                { name: "Aminu Bello", email: "aminu@kolomoni.com", tickets: 4, status: "Active" },
                { name: "Funke Adekola", email: "funke@kolomoni.com", tickets: 2, status: "Active" },
                { name: "Tobi Olawale", email: "tobi@kolomoni.com", tickets: 1, status: "Active" },
              ] : c.id === "STR-002" ? [
                { name: "Yetunde Lawal", email: "yetunde@sterlingmfb.ng", tickets: 7, status: "Active" },
                { name: "Olamide Bakare", email: "olamide@sterlingmfb.ng", tickets: 5, status: "Active" },
                { name: "Femi Coker", email: "femi@sterlingmfb.ng", tickets: 3, status: "Active" },
                { name: "Ibrahim Musa", email: "ibrahim@sterlingmfb.ng", tickets: 3, status: "Active" },
              ] : c.id === "QNT-003" ? [
                { name: "Sade Ojo", email: "sade@quantummfb.com", tickets: 4, status: "Active" },
                { name: "Kelechi Umeh", email: "kelechi@quantummfb.com", tickets: 3, status: "Active" },
              ] : []).map((r) => (
                <tr key={r.email}>
                  <td style={{ fontWeight: 500 }}><span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Avatar name={r.name} size="sm"/> {r.name}</span></td>
                  <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.email}</td>
                  <td className="mono">{r.tickets}</td>
                  <td><Badge status={r.status}>{r.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      ) : (
        <Card>
          <div className="activity-list">
            {[
              { tone: "dot-new", text: <>New ticket <b>TKT-1042</b> raised by Aminu Bello</>, time: "25 May 2026 09:14" },
              { tone: "", text: <>TKT-1040 status changed to Pending Customer</>, time: "24 May 2026 17:10" },
              { tone: "", text: <>Reply sent to TKT-1039 by Mubarak A.</>, time: "24 May 2026 09:20" },
              { tone: "", text: <>Customer profile updated by Nnamdi E.</>, time: "22 May 2026 11:00" },
            ].map((a, i) => (
              <div key={i} className="activity-item">
                <span className={`dot ${a.tone}`}/>
                <div className="body"><p>{a.text}</p><span className="time mono">{a.time}</span></div>
              </div>
            ))}
          </div>
        </Card>
      )}

      <Modal open={archiveOpen} onClose={() => setArchiveOpen(false)} title={`Archive ${c.name}?`}
        actions={<>
          <Button variant="ghost" onClick={() => setArchiveOpen(false)}>Cancel</Button>
          <Button variant="destructive" onClick={() => { updateCustomer(c.id, { status: "Archived" }); toast.success(`${c.name} archived`); setArchiveOpen(false); navigate("/customers"); }}>Archive customer</Button>
        </>}>
        <p>Archiving will prevent new tickets and prevent creating new representatives under this customer. Existing tickets remain accessible.</p>
      </Modal>
    </>
  );
};

// ═══ Products List ══════════════════════════════════════════════════════════
const ProductsList = () => {
  const { data, addProduct } = useTenant();
  const toast = useToast();
  const navigate = (to) => { window.location.hash = to; };
  const [addProductOpen, setAddProductOpen] = useState(false);
  const [newProd, setNewProd] = useState({ name: "", code: "", desc: "" });
  const [prodCusts, setProdCusts] = useState([]);
  const activeCustomers = data.customers.filter((c) => c.status === "Active");
  const resetAddProd = () => { setNewProd({ name: "", code: "", desc: "" }); setProdCusts([]); };
  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Products & services</h1>
          <p className="sub">{data.products.filter((p) => p.status === "Active").length} active · {data.license.products.limit - data.license.products.used} slots remaining</p>
        </div>
        <Button variant="primary" icon="plus" onClick={() => setAddProductOpen(true)}>Add product / service</Button>
      </div>
      <Modal open={addProductOpen} onClose={() => { setAddProductOpen(false); resetAddProd(); }} title="Add a product or service"
        actions={<>
          <Button variant="ghost" onClick={() => { setAddProductOpen(false); resetAddProd(); }}>Cancel</Button>
          <Button variant="primary" icon="check" onClick={() => { const nm = newProd.name || "New product"; const n = prodCusts.length; addProduct(newProd, prodCusts); setAddProductOpen(false); toast.success(`${nm} added${n ? ` and mapped to ${n} customer${n === 1 ? "" : "s"}` : ""}.`); resetAddProd(); }}>Create product</Button>
        </>}>
        <p>Products and services represent what your customers buy or use. Map the customers who use this product — you can change this anytime.</p>
        <div className="two-col-1-1">
          <div className="field"><label className="label">Name <span className="required">*</span></label><input className="input" placeholder="e.g. SeaBaas" value={newProd.name} onChange={(e) => setNewProd({ ...newProd, name: e.target.value })} autoFocus/></div>
          <div className="field"><label className="label">Code</label><input className="input mono" placeholder="auto if blank" value={newProd.code} onChange={(e) => setNewProd({ ...newProd, code: e.target.value })}/></div>
        </div>
        <div className="field" style={{ marginTop: 12 }}><label className="label">Short description</label><textarea className="textarea" rows={2} placeholder="What does this product do?" value={newProd.desc} onChange={(e) => setNewProd({ ...newProd, desc: e.target.value })}/></div>
        <div className="field" style={{ marginTop: 12 }}>
          <label className="label">Map to customers {prodCusts.length ? <span className="mono" style={{ color: "var(--text-muted)", fontWeight: 400 }}>· {prodCusts.length} selected</span> : null}</label>
          <div className="help" style={{ marginTop: -2, marginBottom: 8 }}>Tap the customers who use this product.</div>
          <TogglePicker options={activeCustomers.map((c) => ({ value: c.id, label: c.name }))} selected={prodCusts} onToggle={(v) => setProdCusts((s) => s.includes(v) ? s.filter((x) => x !== v) : [...s, v])} empty="No active customers yet — add one from the Customers page."/>
        </div>
        <div className="banner info" style={{ marginTop: 14, fontSize: 12.5 }}><span className="icon"><Icon name="info" size={14}/></span><div><b>{data.license.products.limit - data.license.products.used} product/service slot{data.license.products.limit - data.license.products.used === 1 ? "" : "s"} remaining</b>.</div></div>
      </Modal>
      <div className="tbl-wrap">
        <table className="tbl">
          <thead><tr><th>Name</th><th>Code</th><th>Description</th><th>Status</th><th>Customers</th><th>Open tickets</th><th>Created</th><th></th></tr></thead>
          <tbody>
            {data.products.map((p) => (
              <tr key={p.id} className={`clickable ${p.status === "Archived" ? "archived-row" : ""}`} onClick={() => navigate("/products/" + p.id)}>
                <td style={{ fontWeight: 600 }}>{p.name}</td>
                <td className="mono" style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{p.id}</td>
                <td style={{ color: "var(--text-muted)" }}>{p.desc}</td>
                <td><Badge status={p.status}>{p.status}</Badge></td>
                <td className="mono">{p.customers}</td>
                <td className="mono">{p.openTickets}</td>
                <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{p.created}</td>
                <td><div onClick={(e) => e.stopPropagation()}><KebabMenu items={[{ label: "View", icon: "external", onClick: () => navigate("/products/" + p.id) }, { label: "Edit", icon: "edit" }, { label: p.status === "Active" ? "Archive" : "Reactivate", icon: "archive", destructive: p.status === "Active" }]}/></div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// ═══ Product Detail ══════════════════════════════════════════════════════════
const ProductDetail = ({ id }) => {
  const { data } = useTenant();
  const navigate = (to) => { window.location.hash = to; };
  const p = data.products.find((x) => x.id === id);
  const [tab, setTab] = useState("overview");
  if (!p) return <Card><EmptyState icon="box" title="Product not found" desc="This product or service no longer exists." action={<Button variant="primary" onClick={() => navigate("/products")}>Back to products</Button>}/></Card>;

  const usingCustomers = data.customers.filter((c) => c.products.includes(p.name));
  const tickets = data.tickets.filter((t) => t.product === p.name);
  const openTickets = tickets.filter((t) => !["Resolved", "Closed"].includes(t.status)).length;

  return (
    <>
      <div className="crumbs"><a onClick={() => navigate("/products")}>Products & services</a><span className="sep">/</span><span>{p.name}</span></div>
      <div className="page-hd">
        <div>
          <div className="row" style={{ gap: 10 }}>
            <h1 style={{ margin: 0 }}>{p.name}</h1>
            <Badge status={p.status}>{p.status}</Badge>
          </div>
          <p className="sub mono">{p.id}</p>
        </div>
        <div className="actions">
          <Button variant="secondary" icon="edit" size="sm">Edit</Button>
          <Button variant={p.status === "Active" ? "destructive" : "secondary"} icon="archive" size="sm">{p.status === "Active" ? "Archive" : "Reactivate"}</Button>
        </div>
      </div>

      <div className="tabs">
        {[["overview", "Overview"], ["customers", "Customers"], ["tickets", "Tickets"]].map(([k, l]) => (
          <button key={k} className={`tab ${tab === k ? "active" : ""}`} onClick={() => setTab(k)}>{l}{k === "customers" && usingCustomers.length ? <span className="tab-count">{usingCustomers.length}</span> : k === "tickets" && tickets.length ? <span className="tab-count">{tickets.length}</span> : null}</button>
        ))}
      </div>

      {tab === "overview" ? (
        <div className="two-col-1-1">
          <Card title="Details">
            <dl className="dl" style={{ display: "grid", gridTemplateColumns: "140px 1fr", rowGap: 10, fontSize: 13.5 }}>
              <dt style={{ color: "var(--text-muted)" }}>Name</dt><dd style={{ margin: 0, fontWeight: 500 }}>{p.name}</dd>
              <dt style={{ color: "var(--text-muted)" }}>Code</dt><dd className="mono" style={{ margin: 0 }}>{p.id}</dd>
              <dt style={{ color: "var(--text-muted)" }}>Description</dt><dd style={{ margin: 0 }}>{p.desc || "—"}</dd>
              <dt style={{ color: "var(--text-muted)" }}>Status</dt><dd style={{ margin: 0 }}><Badge status={p.status}>{p.status}</Badge></dd>
              <dt style={{ color: "var(--text-muted)" }}>Created</dt><dd style={{ margin: 0 }}>{p.created}</dd>
            </dl>
          </Card>
          <div>
            <Card title={`Customers using ${p.name}`}>
              <div className="row" style={{ flexWrap: "wrap", gap: 6 }}>
                {usingCustomers.length === 0 ? <span style={{ color: "var(--text-muted)", fontSize: 13 }}>No customers mapped yet</span> :
                  usingCustomers.map((c) => <span key={c.id} className="chip" style={{ cursor: "pointer" }} onClick={() => navigate("/customers/" + c.id)}>{c.name}</span>)}
              </div>
            </Card>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 16 }}>
              <StatCard label="Customers" value={usingCustomers.length}/>
              <StatCard label="Open tickets" value={openTickets}/>
              <StatCard label="Total tickets" value={tickets.length}/>
            </div>
          </div>
        </div>
      ) : tab === "customers" ? (
        <Card pad={false}>
          {usingCustomers.length ? (
            <table className="tbl">
              <thead><tr><th>Customer</th><th>Code</th><th>Status</th><th>Reps</th><th>Open tickets</th><th></th></tr></thead>
              <tbody>
                {usingCustomers.map((c) => (
                  <tr key={c.id} className="clickable" onClick={() => navigate("/customers/" + c.id)}>
                    <td style={{ fontWeight: 600 }}>{c.name}</td>
                    <td className="mono" style={{ fontSize: 12.5, color: "var(--text-muted)" }}>{c.id}</td>
                    <td><Badge status={c.status}>{c.status}</Badge></td>
                    <td className="mono">{c.reps}</td>
                    <td className="mono">{c.openTickets}</td>
                    <td><Icon name="external" size={14}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <EmptyState icon="users" title="No customers mapped" desc={`Map customers to ${p.name} when adding or editing them.`}/>}
        </Card>
      ) : (
        <Card pad={false}>
          {tickets.length ? (
            <table className="tbl">
              <thead><tr><th>Ticket</th><th>Subject</th><th>Customer</th><th>Status</th><th>Priority</th><th>Updated</th></tr></thead>
              <tbody>
                {tickets.map((t) => (
                  <tr key={t.id} className="clickable" onClick={() => navigate("/tickets/" + t.id)}>
                    <td className="mono" style={{ fontWeight: 600, fontSize: 12.5 }}>{t.id}</td>
                    <td style={{ fontWeight: 500 }}>{t.subject}</td>
                    <td>{t.customer}</td>
                    <td><Badge status={t.status}>{t.status}</Badge></td>
                    <td><Badge status={t.priority}>{t.priority}</Badge></td>
                    <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{t.updated.split(" ").slice(0, 3).join(" ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : <EmptyState icon="ticket" title="No tickets" desc={`No tickets have been raised against ${p.name}.`}/>}
        </Card>
      )}
    </>
  );
};

// ═══ Users & Roles ══════════════════════════════════════════════════════════
const UsersAndRoles = ({ initialTab }) => {
  const { data, addAudit } = useTenant();
  const toast = useToast();
  const [tab, setTab] = useState(initialTab || "users");
  useEffect(() => { setTab(initialTab || "users"); }, [initialTab]);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [invite, setInvite] = useState({ name: "", email: "", role: "Support Agent" });
  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Users & roles</h1>
          <p className="sub">Manage workspace members and permissions.</p>
        </div>
        {tab === "users" ? <Button variant="primary" icon="plus" onClick={() => setInviteOpen(true)}>Invite user</Button> : null}
        <Modal open={inviteOpen} onClose={() => setInviteOpen(false)} title="Invite a team member"
          actions={<>
            <Button variant="ghost" onClick={() => setInviteOpen(false)}>Cancel</Button>
            <Button variant="primary" icon="send" onClick={() => { setInviteOpen(false); addAudit(`Invited ${invite.email || "a new user"} as ${invite.role}`, null, "user"); toast.success(`Invitation sent to ${invite.email || "the new user"}.`); setInvite({ name: "", email: "", role: "Support Agent" }); }} disabled={data.license.users.used >= data.license.users.limit}>Send invitation</Button>
          </>}>
          <p>The user will receive an email to set up their password and join your workspace.</p>
          <div className="two-col-1-1">
            <div className="field"><label className="label">Full name <span className="required">*</span></label><input className="input" placeholder="e.g. Adaeze Okeke" value={invite.name} onChange={(e) => setInvite({ ...invite, name: e.target.value })} autoFocus/></div>
            <div className="field"><label className="label">Email <span className="required">*</span></label><input className="input" type="email" placeholder="name@peerless.io" value={invite.email} onChange={(e) => setInvite({ ...invite, email: e.target.value })}/></div>
          </div>
          <div className="field" style={{ marginTop: 12 }}><label className="label">Role <span className="required">*</span></label>
            <select className="select" value={invite.role} onChange={(e) => setInvite({ ...invite, role: e.target.value })}>
              {data.roles.map((r) => <option key={r}>{r}</option>)}
            </select>
            <div className="help">You can change a user's role at any time.</div>
          </div>
          {data.license.users.used >= data.license.users.limit ? (
            <div className="banner error" style={{ marginTop: 14, fontSize: 12.5 }}><span className="icon"><Icon name="warning" size={14}/></span><div><b>User limit reached.</b> Archive an inactive user to free a slot, or request an upgrade.</div></div>
          ) : (
            <div className="banner info" style={{ marginTop: 14, fontSize: 12.5 }}><span className="icon"><Icon name="info" size={14}/></span><div><b>{data.license.users.limit - data.license.users.used} of {data.license.users.limit} user slots remaining</b> on your plan.</div></div>
          )}
        </Modal>
      </div>
      <div className="tabs">
        <button className={`tab ${tab==="users"?"active":""}`} onClick={() => setTab("users")}>Users <span className="tab-count">{data.users.length}</span></button>
        <button className={`tab ${tab==="reps"?"active":""}`} onClick={() => setTab("reps")}>Customer representatives <span className="tab-count">{REPS.length}</span></button>
        <button className={`tab ${tab==="roles"?"active":""}`} onClick={() => setTab("roles")}>Roles & permissions</button>
        <button className={`tab ${tab==="hierarchy"?"active":""}`} onClick={() => setTab("hierarchy")}>Team hierarchy</button>
      </div>

      {tab === "users" ? (
        <>
          <Card className="" pad={true} style={{ marginBottom: 16 }}>
            <div className="row" style={{ marginBottom: 8, alignItems: "center", justifyContent: "space-between" }}>
              <div><b style={{ fontWeight: 600 }}>9 of 10 user slots used</b><div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>Archive inactive users to free capacity.</div></div>
              <Badge status="warning">90% — limit approaching</Badge>
            </div>
            <ProgressBar value={9} max={10} showPct={false}/>
          </Card>
          <div className="tbl-wrap">
            <table className="tbl">
              <thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th><th>Created</th><th></th></tr></thead>
              <tbody>
                {data.users.map((u) => (
                  <tr key={u.email} className={u.status === "Archived" ? "archived-row" : ""}>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 500 }}><Avatar name={u.name} size="sm"/> {u.name}</span></td>
                    <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{u.email}</td>
                    <td>{u.role}</td>
                    <td><Badge status={u.status}>{u.status}</Badge></td>
                    <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{u.created}</td>
                    <td><KebabMenu items={[{ label: "Edit", icon: "edit" }, { label: "Resend invite", icon: "mail" }, { sep: true }, { label: u.status === "Active" ? "Archive" : "Reactivate", icon: "archive", destructive: u.status === "Active" }]}/></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : tab === "reps" ? (
        <RepsScreenReal embedded/>
      ) : tab === "roles" ? (
        <RolesPanel/>
      ) : (
        <TeamHierarchy embedded/>
      )}
    </>
  );
};

// ═══ License Usage ══════════════════════════════════════════════════════════
const LicenseUsage = () => {
  const { data } = useTenant();
  const toast = useToast();
  const l = data.license;
  const dims = [
    { key: "customers", label: "Client Customers", icon: "users", helper: "Archive inactive customers to free capacity." },
    { key: "tickets", label: "Tickets (this period)", icon: "ticket", helper: "Resets at the start of each billing period." },
    { key: "users", label: "Users", icon: "shield", helper: "Archive inactive users to free a slot." },
    { key: "products", label: "Products / Services", icon: "box", helper: "Archive unused products/services to free capacity." },
  ];
  const overall = Math.round(dims.reduce((a, d) => a + (l[d.key].used / l[d.key].limit), 0) / dims.length * 100);
  const userPct = Math.round((l.users.used / l.users.limit) * 100);
  // Stylized ticket consumption across the billing period
  const consumption = { labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], values: [70, 145, 240, 360, 510, 690, 880, 1020, 1180, 1290, 1380, 1420], unit: "tickets" };
  return (
    <>
      <div className="page-hd">
        <div>
          <h1>License usage</h1>
          <p className="sub">Your package limits, consumption and renewal — {l.billingPeriod}.</p>
        </div>
        <div className="actions">
          <Button variant="secondary" size="sm" icon="mail" onClick={() => toast.info("We'll connect you with your platform administrator.")}>Contact administrator</Button>
          <Button variant="primary" size="sm" icon="sparkles" onClick={() => toast.success("Upgrade request sent to your platform administrator.", "Request sent")}>Request upgrade</Button>
        </div>
      </div>

      <div className="stat-grid">
        <StatCard label="Package" value={l.package} sub={`Payment: ${l.paymentStatus}`}/>
        <StatCard label="Overall utilization" value={`${overall}%`} trend={overall >= 75 ? "Approaching limits" : "Healthy headroom"} trendDir={overall >= 75 ? "up" : "flat"} sparkData={[40, 48, 55, 62, 68, 74, overall]} sparkColor={overall >= 75 ? "var(--warning)" : "var(--chart-1)"}/>
        <StatCard label="Tickets this period" value={l.tickets.used.toLocaleString()} sub={`of ${l.tickets.limit.toLocaleString()} included`}/>
        <StatCard label="Days remaining" value={l.daysRemaining} sub="Until renewal"/>
      </div>

      <div className="banner warn" style={{ marginBottom: 16 }}>
        <span className="icon"><Icon name="warning" size={16}/></span>
        <div>You are approaching your <b>User limit ({userPct}%)</b> ({l.users.used} of {l.users.limit}). Archive inactive users or request an upgrade before renewal.</div>
      </div>

      <Card className="chart-card" style={{ marginBottom: 16 }}>
        <div className="chart-title">
          <span className="big mono">{l.tickets.used.toLocaleString()}</span>
          <h3>tickets consumed of {l.tickets.limit.toLocaleString()} this billing period</h3>
        </div>
        <LineChart data={consumption}/>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {dims.map((d) => {
          const v = l[d.key];
          const pct = Math.round((v.used / v.limit) * 100);
          return (
            <Card key={d.key}>
              <div className="row" style={{ alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14 }}>
                <div className="row" style={{ gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--surface-muted)", display: "grid", placeItems: "center" }}><Icon name={d.icon} size={18}/></div>
                  <div>
                    <div style={{ fontWeight: 600 }}>{d.label}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{d.helper}</div>
                  </div>
                </div>
                {pct >= 90 ? <Badge status="suspended">Critical</Badge> : pct >= 75 ? <Badge status="warning">High</Badge> : <Badge status="active">Healthy</Badge>}
              </div>
              <div className="row" style={{ alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                <div className="mono" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>{v.used.toLocaleString()}<span style={{ fontSize: 14, color: "var(--text-muted)", fontWeight: 400 }}> / {v.limit.toLocaleString()}</span></div>
                <span className="mono" style={{ color: "var(--text-muted)", marginLeft: "auto" }}>{pct}% · {(v.limit - v.used).toLocaleString()} left</span>
              </div>
              <div className={`prog ${pct >= 90 ? "danger" : pct >= 75 ? "warn" : ""}`}><div className="bar" style={{ width: pct + "%" }}/></div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

// ═══ Reports ════════════════════════════════════════════════════════════════
const Reports = () => {
  const [tab, setTab] = useState("tickets");
  const { data } = useTenant();

  // Aggregate-by-status
  const byStatus = STATUS_LIST.map((s) => ({ label: s.split(" ")[0], values: [data.tickets.filter((t) => t.status === s).length] }));
  const byPriority = PRIORITY_LIST.map((p) => ({ label: p, values: [data.tickets.filter((t) => t.priority === p).length] }));

  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Reports</h1>
          <p className="sub">Performance & volume insights — last 30 days.</p>
        </div>
        <div className="actions">
          <select className="select" style={{ height: 36, width: "auto" }} defaultValue="30">
            <option value="7">Last 7 days</option><option value="30">Last 30 days</option><option value="90">Last 90 days</option>
          </select>
          <Button variant="ghost" icon="download" size="sm">Export CSV</Button>
        </div>
      </div>

      <div className="tabs">
        {["tickets","customers"].map((k) => (
          <button key={k} className={`tab ${tab===k?"active":""}`} onClick={() => setTab(k)}>{k[0].toUpperCase() + k.slice(1)}</button>
        ))}
      </div>

      {tab === "tickets" ? (
        <>
          <div className="stat-grid">
            <StatCard label="Total tickets" value="1,420" trend="↑ 8% vs prev." trendDir="up" sparkData={[120,140,160,150,180,200,220]}/>
            <StatCard label="Resolved" value="1,205" trend="84.9% resolution rate" trendDir="up" sparkData={[100,120,140,150,170,180,210]} sparkColor="var(--chart-2)"/>
            <StatCard label="Avg. resolution" value="6.4 hrs" trend="↓ 18% vs prev." trendDir="down" sparkData={[8,7.5,7,6.8,6.6,6.5,6.4]} sparkColor="var(--chart-3)"/>
            <StatCard label="First response" value="42 min" trend="SLA met 96%" trendDir="up" sparkData={[60,55,50,48,46,44,42]} sparkColor="var(--chart-4)"/>
          </div>

          <div className="two-col-1-1" style={{ marginBottom: 16 }}>
            <Card title="By status">
              <BarChart data={byStatus} colors={["var(--chart-2)"]}/>
            </Card>
            <Card title="By priority">
              <BarChart data={byPriority} colors={["var(--chart-1)"]}/>
            </Card>
          </div>

          <div className="two-col-1-1">
            <Card title="Tickets by customer" pad={false}>
              <table className="tbl">
                <thead><tr><th>Customer</th><th style={{ textAlign: "right" }}>Total</th><th style={{ textAlign: "right" }}>Open</th><th style={{ textAlign: "right" }}>Resolved</th><th style={{ textAlign: "right" }}>Avg. time</th></tr></thead>
                <tbody>
                  {[
                    { name: "Sterling MFB", total: 89, open: 18, resolved: 67, avg: "5.8h" },
                    { name: "Kolomoni Ltd", total: 47, open: 12, resolved: 32, avg: "6.1h" },
                    { name: "Quantum MFB", total: 23, open: 7, resolved: 15, avg: "7.2h" },
                  ].map((r) => (
                    <tr key={r.name}><td style={{ fontWeight: 500 }}>{r.name}</td><td className="mono" style={{ textAlign: "right" }}>{r.total}</td><td className="mono" style={{ textAlign: "right" }}>{r.open}</td><td className="mono" style={{ textAlign: "right" }}>{r.resolved}</td><td className="mono" style={{ textAlign: "right", color: "var(--text-muted)" }}>{r.avg}</td></tr>
                  ))}
                </tbody>
              </table>
            </Card>
            <Card title="Tickets by agent" pad={false}>
              <table className="tbl">
                <thead><tr><th>Agent</th><th style={{ textAlign: "right" }}>Assigned</th><th style={{ textAlign: "right" }}>Resolved</th><th style={{ textAlign: "right" }}>Open</th><th style={{ textAlign: "right" }}>Avg. time</th></tr></thead>
                <tbody>
                  {[
                    { name: "Mubarak Adewale", assigned: 42, resolved: 35, open: 7, avg: "4.9h" },
                    { name: "Qudus Salawu", assigned: 38, resolved: 31, open: 7, avg: "5.4h" },
                    { name: "Ify Nwosu", assigned: 28, resolved: 22, open: 6, avg: "6.1h" },
                    { name: "Tunde Afolabi", assigned: 25, resolved: 20, open: 5, avg: "5.8h" },
                  ].map((r) => (
                    <tr key={r.name}><td><span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 500 }}><Avatar name={r.name} size="sm"/> {r.name}</span></td><td className="mono" style={{ textAlign: "right" }}>{r.assigned}</td><td className="mono" style={{ textAlign: "right" }}>{r.resolved}</td><td className="mono" style={{ textAlign: "right" }}>{r.open}</td><td className="mono" style={{ textAlign: "right", color: "var(--text-muted)" }}>{r.avg}</td></tr>
                  ))}
                </tbody>
              </table>
            </Card>
          </div>
        </>
      ) : (
        <CustomersReport/>
      )}
    </>
  );
};

// ═══ Customer report ════════════════════════════════════════════════════════
const CustomersReport = () => {
  const { data } = useTenant();
  const navigate = (to) => { window.location.hash = to; };
  const custs = data.customers;
  const active = custs.filter((c) => c.status === "Active");
  const totalReps = custs.reduce((a, c) => a + c.reps, 0);
  const totalTickets = custs.reduce((a, c) => a + c.totalTickets, 0);
  const avgPerCust = active.length ? Math.round(totalTickets / active.length) : 0;
  const byVolume = [...custs].sort((a, b) => b.totalTickets - a.totalTickets);
  const ticketBars = byVolume.map((c) => ({ label: c.name.split(" ")[0], values: [c.totalTickets] }));
  // Product adoption — how many customers use each product
  const productAdoption = data.products.filter((p) => p.status === "Active").map((p) => ({
    name: p.name, count: custs.filter((c) => c.products.includes(p.name)).length,
  })).sort((a, b) => b.count - a.count);
  const maxAdopt = Math.max(1, ...productAdoption.map((p) => p.count));
  return (
    <>
      <div className="stat-grid">
        <StatCard label="Total customers" value={custs.length} sub={`${active.length} active · ${custs.length - active.length} archived`}/>
        <StatCard label="Representatives" value={totalReps} sub="Across all accounts" sparkData={[8, 9, 10, 11, 12, 13, 14]} sparkColor="var(--chart-2)"/>
        <StatCard label="Avg. tickets / customer" value={avgPerCust} trend="↑ 6% vs prev." trendDir="up" sparkData={[28, 30, 31, 33, 34, 36, 37]} sparkColor="var(--chart-3)"/>
        <StatCard label="Open tickets" value={custs.reduce((a, c) => a + c.openTickets, 0)} sub="Currently unresolved"/>
      </div>

      <div className="two-col-7-5" style={{ marginBottom: 16, alignItems: "start" }}>
        <Card title="Ticket volume by customer">
          <BarChart data={ticketBars} colors={["var(--chart-2)"]}/>
        </Card>
        <Card title="Product adoption">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {productAdoption.map((p) => (
              <ProgressBar key={p.name} value={p.count} max={maxAdopt} label={p.name} unit=" customers" showPct={false}/>
            ))}
          </div>
        </Card>
      </div>

      <Card title="Customer engagement" pad={false}>
        <table className="tbl">
          <thead><tr>
            <th>Customer</th><th>Status</th><th style={{ textAlign: "right" }}>Reps</th><th style={{ textAlign: "right" }}>Open</th><th style={{ textAlign: "right" }}>Total</th><th>Products</th>
          </tr></thead>
          <tbody>
            {byVolume.map((c) => (
              <tr key={c.id} className={`clickable ${c.status === "Archived" ? "archived-row" : ""}`} onClick={() => navigate("/customers/" + c.id)}>
                <td><div style={{ fontWeight: 500 }}>{c.name}</div><div className="mono" style={{ fontSize: 11, color: "var(--text-subtle)" }}>{c.id}</div></td>
                <td><Badge status={c.status}>{c.status}</Badge></td>
                <td className="mono" style={{ textAlign: "right" }}>{c.reps}</td>
                <td className="mono" style={{ textAlign: "right", fontWeight: 600 }}>{c.openTickets}</td>
                <td className="mono" style={{ textAlign: "right", color: "var(--text-muted)" }}>{c.totalTickets}</td>
                <td><div className="row" style={{ flexWrap: "wrap", gap: 4 }}>{c.products.slice(0, 3).map((p) => <span key={p} className="chip" style={{ fontSize: 11 }}>{p}</span>)}{c.products.length === 0 ? <span style={{ color: "var(--text-subtle)", fontSize: 12 }}>—</span> : null}</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  );
};

// ═══ License report ═════════════════════════════════════════════════════════
// ═══ Lightweight placeholders for routed-but-not-detailed screens ═══════════
const PlaceholderScreen = ({ icon, title, desc }) => (
  <>
    <div className="page-hd"><div><h1>{title}</h1><p className="sub">{desc}</p></div></div>
    <Card><EmptyState icon={icon} title={`${title} coming soon`} desc="This section is part of the next iteration. The structure and navigation are wired up." action={<Button variant="secondary" icon="arrow-right" onClick={() => { window.location.hash = "/dashboard"; }}>Back to dashboard</Button>}/></Card>
  </>
);

const TicketForms = () => <PlaceholderScreen icon="form" title="Ticket forms" desc="Configure intake forms used by your customers."/>;
const RepsScreen = () => <PlaceholderScreen icon="people" title="Customer representatives" desc="Manage all individual contacts across your customer accounts."/>;
const SettingsScreen = () => <PlaceholderScreen icon="settings" title="Settings" desc="Workspace configuration, branding, and notifications."/>;

Object.assign(window, { TogglePicker, CustomersList, CustomerDetail, ProductsList, ProductDetail, UsersAndRoles, LicenseUsage, Reports, TicketForms, RepsScreen, SettingsScreen });

// ===== tenant-screens-c.jsx =====
// tenant-screens-c.jsx — Customer Representatives, Ticket Forms, Settings + Add modals

// ═══ Customer Representatives ════════════════════════════════════════════════
const REPS = [
  { id: "REP-001", name: "Aminu Bello", customer: "Kolomoni Ltd", customerId: "KOL-001", email: "aminu@kolomoni.com", phone: "+234 802 111 2233", openTickets: 2, totalTickets: 4, status: "Active", created: "16 Feb 2025", lastActive: "25 May 2026" },
  { id: "REP-002", name: "Funke Adekola", customer: "Kolomoni Ltd", customerId: "KOL-001", email: "funke@kolomoni.com", phone: "+234 803 222 3344", openTickets: 1, totalTickets: 2, status: "Active", created: "20 Feb 2025", lastActive: "22 May 2026" },
  { id: "REP-003", name: "Tobi Olawale", customer: "Kolomoni Ltd", customerId: "KOL-001", email: "tobi@kolomoni.com", phone: "+234 805 333 4455", openTickets: 0, totalTickets: 1, status: "Active", created: "01 Mar 2025", lastActive: "18 May 2026" },
  { id: "REP-004", name: "Yetunde Lawal", customer: "Sterling MFB", customerId: "STR-002", email: "yetunde@sterlingmfb.ng", phone: "+234 807 444 5566", openTickets: 3, totalTickets: 7, status: "Active", created: "22 Feb 2025", lastActive: "25 May 2026" },
  { id: "REP-005", name: "Olamide Bakare", customer: "Sterling MFB", customerId: "STR-002", email: "olamide@sterlingmfb.ng", phone: "+234 808 555 6677", openTickets: 2, totalTickets: 5, status: "Active", created: "25 Feb 2025", lastActive: "25 May 2026" },
  { id: "REP-006", name: "Femi Coker", customer: "Sterling MFB", customerId: "STR-002", email: "femi@sterlingmfb.ng", phone: "+234 809 666 7788", openTickets: 1, totalTickets: 3, status: "Active", created: "10 Mar 2025", lastActive: "24 May 2026" },
  { id: "REP-007", name: "Ibrahim Musa", customer: "Sterling MFB", customerId: "STR-002", email: "ibrahim@sterlingmfb.ng", phone: "+234 810 777 8899", openTickets: 1, totalTickets: 3, status: "Active", created: "15 Mar 2025", lastActive: "23 May 2026" },
  { id: "REP-008", name: "Sade Ojo", customer: "Quantum MFB", customerId: "QNT-003", email: "sade@quantummfb.com", phone: "+234 812 888 9900", openTickets: 2, totalTickets: 4, status: "Active", created: "12 Mar 2025", lastActive: "24 May 2026" },
  { id: "REP-009", name: "Kelechi Umeh", customer: "Quantum MFB", customerId: "QNT-003", email: "kelechi@quantummfb.com", phone: "+234 813 999 0011", openTickets: 1, totalTickets: 3, status: "Active", created: "18 Mar 2025", lastActive: "22 May 2026" },
  { id: "REP-010", name: "Ade Bankole", customer: "First Merchants Co.", customerId: "FMC-004", email: "ade@firstmerchants.ng", phone: "+234 815 010 2233", openTickets: 0, totalTickets: 8, status: "Archived", created: "10 Jan 2025", lastActive: "10 Apr 2026" },
];

const RepsScreenReal = ({ embedded }) => {
  const { data } = useTenant();
  const toast = useToast();
  const navigate = (to) => { window.location.hash = to; };
  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState("All");
  const [status, setStatus] = useState("All");
  const [inviteOpen, setInviteOpen] = useState(false);
  const [sort, setSort] = useState({ key: null, dir: "asc" });
  const toggleSort = (key) => setSort((s) => s.key === key ? (s.dir === "asc" ? { key, dir: "desc" } : { key: null, dir: "asc" }) : { key, dir: "asc" });

  const filtered = REPS.filter((r) => {
    if (search && !(r.name.toLowerCase().includes(search.toLowerCase()) || r.email.toLowerCase().includes(search.toLowerCase()))) return false;
    if (customer !== "All" && r.customer !== customer) return false;
    if (status !== "All" && r.status !== status) return false;
    return true;
  });
  const SORTERS = {
    name: (a, b) => a.name.localeCompare(b.name),
    customer: (a, b) => a.customer.localeCompare(b.customer),
    open: (a, b) => a.openTickets - b.openTickets,
    total: (a, b) => a.totalTickets - b.totalTickets,
    active: (a, b) => parseUpdated(a.lastActive) - parseUpdated(b.lastActive),
    status: (a, b) => a.status.localeCompare(b.status),
  };
  const sorted = sort.key && SORTERS[sort.key] ? (sort.dir === "desc" ? [...filtered].sort(SORTERS[sort.key]).reverse() : [...filtered].sort(SORTERS[sort.key])) : filtered;
  const anyFilter = search || customer !== "All" || status !== "All" || sort.key;
  const resetFilters = () => { setSearch(""); setCustomer("All"); setStatus("All"); setSort({ key: null, dir: "asc" }); };

  return (
    <>
      {!embedded ? (
        <div className="page-hd">
          <div>
            <h1>Customer representatives</h1>
            <p className="sub">All individual contacts across your customer accounts · {REPS.filter((r) => r.status === "Active").length} active</p>
          </div>
          <div className="actions">
            <Button variant="ghost" icon="download" size="sm">Export CSV</Button>
            <Button variant="primary" icon="plus" onClick={() => setInviteOpen(true)}>Invite representative</Button>
          </div>
        </div>
      ) : null}

      <div className="stat-grid" style={{ marginBottom: 20 }}>
        <StatCard label="Total representatives" value={REPS.length} sub="Across all customers"/>
        <StatCard label="Active this week" value="8" sub="Logged in past 7 days" sparkData={[5,6,7,7,8,8,8]} sparkColor="var(--chart-1)"/>
        <StatCard label="Open tickets" value={REPS.reduce((a, r) => a + r.openTickets, 0)} sub="Across all reps"/>
        <StatCard label="New this month" value="2" trend="↑ 50% vs last" trendDir="up" sparkColor="var(--chart-2)"/>
      </div>

      <div className="tbl-wrap table-menus">
        <div className="tbl-toolbar">
          <div className="input-wrap" style={{ flex: 1, maxWidth: 380 }}>
            <span className="input-icon"><Icon name="search" size={15}/></span>
            <input className="input has-icon" style={{ height: 36 }} placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <div className="spacer"/>
          <span style={{ fontSize: 12.5, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{sorted.length} of {REPS.length} reps</span>
          {anyFilter ? <Button variant="ghost" size="sm" icon="x" onClick={resetFilters}>Reset</Button> : null}
          {embedded ? <Button variant="primary" size="sm" icon="plus" onClick={() => setInviteOpen(true)}>Invite representative</Button> : null}
        </div>
        {sorted.length === 0 ? (
          <EmptyState icon="users" title="No representatives match" desc="Try adjusting your filters or invite a new representative." action={<Button variant="secondary" onClick={resetFilters}>Clear filters</Button>}/>
        ) : (
          <table className="tbl">
            <thead><tr>
              <th><Th label="Name" sortKey="name" sort={sort} onSort={toggleSort}/></th>
              <th><Th label="Customer" sortKey="customer" sort={sort} onSort={toggleSort} filter={{ value: customer, set: setCustomer, all: "All", options: ["All", ...data.customers.map((c) => c.name)] }}/></th>
              <th>Email</th><th>Phone</th>
              <th><Th label="Open" sortKey="open" sort={sort} onSort={toggleSort}/></th>
              <th><Th label="Total" sortKey="total" sort={sort} onSort={toggleSort}/></th>
              <th><Th label="Last active" sortKey="active" sort={sort} onSort={toggleSort}/></th>
              <th><Th label="Status" sortKey="status" sort={sort} onSort={toggleSort} filter={{ value: status, set: setStatus, all: "All", options: ["All", "Active", "Archived"] }}/></th>
              <th></th>
            </tr></thead>
            <tbody>
              {sorted.map((r) => (
                <tr key={r.id} className={r.status === "Archived" ? "archived-row" : ""}>
                  <td><span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontWeight: 500 }}><Avatar name={r.name} size="sm"/> <div><div>{r.name}</div><div className="mono" style={{ fontSize: 11, color: "var(--text-subtle)" }}>{r.id}</div></div></span></td>
                  <td><a onClick={() => navigate("/customers/" + r.customerId)} style={{ cursor: "pointer", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: 2 }}>{r.customer}</a></td>
                  <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.email}</td>
                  <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.phone}</td>
                  <td className="mono"><b>{r.openTickets}</b></td>
                  <td className="mono" style={{ color: "var(--text-muted)" }}>{r.totalTickets}</td>
                  <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.lastActive}</td>
                  <td><Badge status={r.status}>{r.status}</Badge></td>
                  <td><KebabMenu items={[
                    { label: "View tickets", icon: "ticket" },
                    { label: "Edit details", icon: "edit" },
                    { label: "Resend invite", icon: "mail" },
                    { sep: true },
                    { label: r.status === "Active" ? "Archive" : "Reactivate", icon: "archive", destructive: r.status === "Active" },
                  ]}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Modal open={inviteOpen} onClose={() => setInviteOpen(false)} title="Invite a representative"
        actions={<>
          <Button variant="ghost" onClick={() => setInviteOpen(false)}>Cancel</Button>
          <Button variant="primary" icon="send" onClick={() => { setInviteOpen(false); toast.success("Invitation sent. They'll receive an email with login details."); }}>Send invitation</Button>
        </>}>
        <p>Add a new contact under one of your active customers. They'll receive an email to set up their account.</p>
        <div className="field" style={{ marginBottom: 12 }}>
          <label className="label">Customer <span className="required">*</span></label>
          <select className="select"><option>Select a customer</option>{useTenant().data.customers.filter((c) => c.status === "Active").map((c) => <option key={c.id}>{c.name}</option>)}</select>
        </div>
        <div className="two-col-1-1">
          <div className="field"><label className="label">Full name <span className="required">*</span></label><input className="input" placeholder="e.g. Aminu Bello"/></div>
          <div className="field"><label className="label">Email <span className="required">*</span></label><input className="input" type="email" placeholder="aminu@kolomoni.com"/></div>
        </div>
      </Modal>
    </>
  );
};

// ═══ Ticket Forms ════════════════════════════════════════════════════════════
// Forms now live in the tenant store (data.forms) so create/import persist.
// Starter field set used when building a brand-new form from scratch:
const FORM_FIELDS = [
  { type: "select", label: "Product / Service", required: true, icon: "box" },
  { type: "text", label: "Subject", required: true, icon: "edit" },
  { type: "textarea", label: "Describe your issue", required: true, icon: "form" },
  { type: "radio", label: "Priority", required: true, icon: "warning" },
  { type: "select", label: "Category", required: false, icon: "tag" },
  { type: "file", label: "Attachments", required: false, icon: "paperclip" },
];

const TicketFormsReal = () => {
  const { data } = useTenant();
  const toast = useToast();
  const [selected, setSelected] = useState(null); // existing or new form being edited
  const [importing, setImporting] = useState(false);

  const startCreate = () => setSelected({ id: null, name: "Untitled form", status: "Active", isDefault: false, products: [], submissions: 0, fields: FORM_FIELDS.length, fieldDefs: FORM_FIELDS, isNew: true });

  if (selected) return <FormBuilder form={selected} onBack={() => setSelected(null)}/>;

  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Ticket forms</h1>
          <p className="sub">Configure the intake forms customers use to raise tickets.</p>
        </div>
        <div className="actions">
          <Button variant="ghost" icon="download" size="sm" onClick={() => setImporting(true)}>Import form</Button>
          <Button variant="primary" icon="plus" onClick={startCreate}>Create form</Button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        {data.forms.map((f) => (
          <div key={f.id} className="card" style={{ padding: 20, cursor: "pointer", transition: "all .15s", opacity: f.status === "Archived" ? 0.6 : 1 }}
            onMouseEnter={(e) => { if (f.status !== "Archived") { e.currentTarget.style.borderColor = "#000"; e.currentTarget.style.transform = "translateY(-2px)"; } }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = ""; }}
            onClick={() => setSelected(f)}>
            <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--surface-muted)", display: "grid", placeItems: "center" }}>
                <Icon name="form" size={20}/>
              </div>
              <div className="row" style={{ gap: 6 }}>
                {f.isDefault ? <Badge status="active">Default</Badge> : null}
                <Badge status={f.status}>{f.status}</Badge>
              </div>
            </div>
            <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600, letterSpacing: "-0.005em" }}>{f.name}</h3>
            <div className="mono" style={{ fontSize: 11, color: "var(--text-subtle)", marginBottom: 12 }}>{f.id}</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontSize: 12.5, marginBottom: 14 }}>
              <div><div style={{ color: "var(--text-muted)" }}>Submissions</div><div className="mono" style={{ fontSize: 16, fontWeight: 600 }}>{f.submissions.toLocaleString()}</div></div>
              <div><div style={{ color: "var(--text-muted)" }}>Fields</div><div className="mono" style={{ fontSize: 16, fontWeight: 600 }}>{f.fields}</div></div>
            </div>
            <div className="row" style={{ flexWrap: "wrap", gap: 4, marginBottom: 12 }}>
              {f.products.slice(0, 3).map((p) => <span key={p} className="chip" style={{ fontSize: 11 }}>{p}</span>)}
              {f.products.length > 3 ? <span className="chip" style={{ fontSize: 11 }}>+{f.products.length - 3}</span> : null}
              {f.products.length === 0 ? <span style={{ color: "var(--text-subtle)", fontSize: 12 }}>No products</span> : null}
            </div>
            <div className="divider" style={{ margin: "12px 0 10px" }}/>
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span style={{ fontSize: 11, color: "var(--text-muted)" }}>Updated {f.updated}</span>
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--fg)" }}>Edit →</span>
            </div>
          </div>
        ))}

        <div className="card" style={{ padding: 20, border: "1.5px dashed var(--border-strong)", boxShadow: "none", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", color: "var(--text-muted)", minHeight: 200, cursor: "pointer", background: "transparent" }}
          onClick={startCreate}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--surface-muted)", display: "grid", placeItems: "center", marginBottom: 12 }}><Icon name="plus" size={20}/></div>
          <b style={{ color: "var(--fg)" }}>Create a new form</b>
          <p style={{ fontSize: 12.5, margin: "4px 0 0" }}>Start blank or import one.</p>
        </div>
      </div>

      <ImportFormModal open={importing} onClose={() => setImporting(false)}/>
    </>
  );
};

const FormBuilder = ({ form, onBack }) => {
  const { addForm, updateForm } = useTenant();
  const toast = useToast();
  const [fields, setFields] = useState(form.fieldDefs || FORM_FIELDS);
  const [activeField, setActiveField] = useState(0);
  const [formName, setFormName] = useState(form.name);

  const saveForm = () => {
    if (form.isNew) { addForm({ name: formName, products: form.products || [], fieldDefs: fields }); toast.success(`Form "${formName}" created. Customers can use it now.`); }
    else { updateForm(form.id, { name: formName, fields: fields.length, fieldDefs: fields }); toast.success("Form saved. Customers will see your changes shortly."); }
    onBack();
  };

  const moveField = (i, dir) => {
    const target = i + dir;
    if (target < 0 || target >= fields.length) return;
    const next = [...fields];
    [next[i], next[target]] = [next[target], next[i]];
    setFields(next);
    setActiveField(target);
  };

  return (
    <>
      <div className="crumbs"><a onClick={onBack}>Ticket forms</a><span className="sep">/</span><span>{form.name}</span></div>
      <div className="page-hd">
        <div style={{ flex: 1 }}>
          <input className="input" value={formName} onChange={(e) => setFormName(e.target.value)}
            style={{ border: "1.5px solid transparent", padding: "2px 8px", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", height: "auto", marginLeft: -8 }}/>
          <p className="sub mono">{form.isNew ? "New form · not saved yet" : `${form.id} · last edited ${form.updated}`}</p>
        </div>
        <div className="actions">
          <Button variant="ghost" size="sm" icon="eye">Preview</Button>
          <Button variant="secondary" size="sm" onClick={onBack}>Discard</Button>
          <Button variant="primary" size="sm" icon="check" onClick={saveForm}>{form.isNew ? "Create form" : "Save changes"}</Button>
        </div>
      </div>

      <div className="two-col-7-5">
        {/* Field list (left) */}
        <Card title="Fields" action={<Button variant="ghost" size="xs" icon="plus" onClick={() => setFields([...fields, { type: "text", label: "New field", required: false, icon: "edit" }])}>Add field</Button>} pad={false}>
          <div style={{ padding: 8 }}>
            {fields.map((f, i) => (
              <div key={i} onClick={() => setActiveField(i)}
                style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 12px", borderRadius: 8, cursor: "pointer", background: activeField === i ? "var(--surface-muted)" : "transparent", border: "1.5px solid " + (activeField === i ? "#000" : "transparent"), marginBottom: 4 }}>
                <span style={{ display: "grid", placeItems: "center", width: 32, height: 32, borderRadius: 7, background: "#fff", border: "1px solid var(--border)" }}>
                  <Icon name={f.icon} size={14}/>
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 500, fontSize: 13.5, display: "flex", alignItems: "center", gap: 6 }}>
                    {f.label} {f.required ? <span className="required" style={{ fontSize: 11 }}>*</span> : null}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{f.type}</div>
                </div>
                <div className="row" style={{ gap: 2 }}>
                  <button className="kebab-btn" onClick={(e) => { e.stopPropagation(); moveField(i, -1); }} disabled={i === 0}><Icon name="chevron-up" size={14}/></button>
                  <button className="kebab-btn" onClick={(e) => { e.stopPropagation(); moveField(i, 1); }} disabled={i === fields.length - 1}><Icon name="chevron-down" size={14}/></button>
                  <button className="kebab-btn" onClick={(e) => { e.stopPropagation(); setFields(fields.filter((_, j) => j !== i)); }} style={{ color: "var(--destructive)" }}><Icon name="trash" size={14}/></button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right column: preview + settings */}
        <div className="side-panel">
          <Card title="Field settings">
            {fields[activeField] ? (
              <>
                <div className="field"><label className="label">Label</label>
                  <input className="input" value={fields[activeField].label} onChange={(e) => setFields(fields.map((f, i) => i === activeField ? { ...f, label: e.target.value } : f))}/>
                </div>
                <div className="field" style={{ marginTop: 12 }}><label className="label">Type</label>
                  <select className="select" value={fields[activeField].type} onChange={(e) => setFields(fields.map((f, i) => i === activeField ? { ...f, type: e.target.value } : f))}>
                    <option value="text">Text input</option>
                    <option value="textarea">Long text</option>
                    <option value="select">Dropdown</option>
                    <option value="radio">Radio buttons</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="file">File upload</option>
                  </select>
                </div>
                <div className="row" style={{ marginTop: 14, justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13 }}>Required field</span>
                  <label style={{ display: "inline-flex", alignItems: "center", gap: 8, cursor: "pointer" }}>
                    <input type="checkbox" checked={fields[activeField].required} onChange={(e) => setFields(fields.map((f, i) => i === activeField ? { ...f, required: e.target.checked } : f))}/>
                  </label>
                </div>
              </>
            ) : <p style={{ color: "var(--text-muted)", fontSize: 13 }}>Select a field to edit its settings.</p>}
          </Card>

          <Card title="Applies to">
            <div className="row" style={{ flexWrap: "wrap", gap: 6 }}>
              {form.products.length ? form.products.map((p) => <span key={p} className="chip" style={{ background: "var(--fg)", color: "#fff" }}>{p} <button className="chip-x" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}><Icon name="x" size={10}/></button></span>) : <span style={{ color: "var(--text-muted)", fontSize: 13 }}>No products selected</span>}
              <Button variant="ghost" size="xs" icon="plus" style={{ height: 24 }}>Add product</Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

// ═══ Settings ════════════════════════════════════════════════════════════════
const SettingsReal = () => {
  const toast = useToast();
  const { data } = useTenant();
  const [tab, setTab] = useState("workspace");

  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Settings</h1>
          <p className="sub">Manage workspace configuration, branding, and notifications.</p>
        </div>
      </div>

      <div className="tabs">
        {[
          ["workspace", "Workspace"],
          ["branding", "Branding"],
          ["notifications", "Notifications"],
          ["security", "Security"],
          ["billing", "Billing"],
        ].map(([k, l]) => (
          <button key={k} className={`tab ${tab === k ? "active" : ""}`} onClick={() => setTab(k)}>{l}</button>
        ))}
      </div>

      {tab === "workspace" ? (
        <div className="two-col-7-5">
          <div>
            <Card title="Workspace details">
              <div className="two-col-1-1">
                <div className="field"><label className="label">Workspace name</label><input className="input" defaultValue={data.workspace.name}/></div>
                <div className="field"><label className="label">Workspace code</label><input className="input mono" defaultValue={data.workspace.code} readOnly style={{ background: "var(--surface-muted)", color: "var(--text-muted)" }}/><div className="help">Cannot be changed after creation.</div></div>
              </div>
              <div className="field" style={{ marginTop: 14 }}><label className="label">Support email</label><input className="input" defaultValue="support@peerless.io"/><div className="help">Replies sent from your portal will appear from this address.</div></div>
              <div className="two-col-1-1" style={{ marginTop: 14 }}>
                <div className="field"><label className="label">Timezone</label>
                  <select className="select" defaultValue="Africa/Lagos">
                    <option>Africa/Lagos</option><option>Europe/London</option><option>America/New_York</option><option>UTC</option>
                  </select>
                </div>
                <div className="field"><label className="label">Date format</label>
                  <select className="select" defaultValue="DD MMM YYYY">
                    <option>DD MMM YYYY</option><option>MM/DD/YYYY</option><option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
              <div className="row" style={{ justifyContent: "flex-end", marginTop: 16, gap: 8 }}>
                <Button variant="ghost">Cancel</Button>
                <Button variant="primary" onClick={() => toast.success("Workspace settings saved.")}>Save changes</Button>
              </div>
            </Card>

            <div style={{ height: 16 }}/>

            <Card title="Business hours">
              <p style={{ color: "var(--text-muted)", fontSize: 13, margin: "0 0 14px" }}>SLA timers pause outside business hours.</p>
              <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 1fr", gap: 8, fontSize: 13 }}>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                  <React.Fragment key={d}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 500 }}>
                      <input type="checkbox" defaultChecked={d !== "Saturday" && d !== "Sunday"}/> {d}
                    </div>
                    <input className="input" defaultValue="09:00" disabled={d === "Saturday" || d === "Sunday"} style={{ height: 34 }}/>
                    <input className="input" defaultValue="17:00" disabled={d === "Saturday" || d === "Sunday"} style={{ height: 34 }}/>
                  </React.Fragment>
                ))}
              </div>
            </Card>
          </div>

          <div className="side-panel">
            <Card title="Danger zone">
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 4 }}>Export all data</div>
                <p style={{ fontSize: 12.5, color: "var(--text-muted)", margin: "0 0 8px" }}>Get a full backup of tickets, customers, users, and forms as JSON.</p>
                <Button variant="secondary" size="sm" icon="download">Request export</Button>
              </div>
              <div className="divider"/>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13.5, marginBottom: 4, color: "var(--destructive)" }}>Delete workspace</div>
                <p style={{ fontSize: 12.5, color: "var(--text-muted)", margin: "0 0 8px" }}>Permanently delete this workspace and all associated data. This cannot be undone.</p>
                <Button variant="destructive" size="sm" icon="trash">Delete workspace</Button>
              </div>
            </Card>
          </div>
        </div>
      ) : tab === "branding" ? (
        <div className="two-col-7-5">
          <Card title="Customer portal branding">
            <p style={{ color: "var(--text-muted)", fontSize: 13, margin: "0 0 16px" }}>What your customers see when they sign in.</p>

            <div className="field">
              <label className="label">Display name</label>
              <input className="input" defaultValue="Peerless FinTech"/>
            </div>
            <div className="field" style={{ marginTop: 14 }}>
              <label className="label">Sub-label</label>
              <input className="input" defaultValue="Support Portal"/>
            </div>
            <div className="field" style={{ marginTop: 14 }}>
              <label className="label">Custom subdomain</label>
              <div style={{ display: "flex" }}>
                <input className="input" defaultValue="support" style={{ borderRadius: "8px 0 0 8px", borderRight: 0 }}/>
                <span style={{ display: "inline-flex", alignItems: "center", padding: "0 14px", border: "1.5px solid var(--border)", borderLeft: 0, borderRadius: "0 8px 8px 0", background: "var(--surface-muted)", color: "var(--text-muted)", fontSize: 13 }}>.peerless.io</span>
              </div>
            </div>
            <div className="field" style={{ marginTop: 14 }}>
              <label className="label">Logo</label>
              <div className="row" style={{ gap: 12, alignItems: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 12, background: "#000", color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>P</div>
                <Button variant="secondary" size="sm" icon="paperclip">Upload new logo</Button>
                <Button variant="ghost" size="sm">Remove</Button>
              </div>
              <div className="help">PNG or SVG · square aspect · at least 256×256</div>
            </div>
            <div className="row" style={{ justifyContent: "flex-end", marginTop: 16, gap: 8 }}>
              <Button variant="ghost">Cancel</Button>
              <Button variant="primary" onClick={() => toast.success("Branding updated. Your portal is live.")}>Save changes</Button>
            </div>
          </Card>

          <Card title="Live preview">
            <div style={{ background: "var(--surface-muted)", padding: 24, borderRadius: 10, border: "1.5px solid var(--border)" }}>
              <div style={{ background: "#fff", padding: "28px 24px", borderRadius: 12, boxShadow: "0 4px 20px -8px rgba(0,0,0,0.1)", border: "1px solid var(--border)" }}>
                <div className="row" style={{ gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: "#000", color: "#fff", display: "grid", placeItems: "center", fontWeight: 700 }}>P</div>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 700 }}>Peerless FinTech</div>
                    <div style={{ fontSize: 11, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>Support Portal</div>
                  </div>
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>Email</div>
                <div style={{ height: 32, background: "var(--surface-muted)", borderRadius: 6, marginBottom: 8 }}/>
                <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>Password</div>
                <div style={{ height: 32, background: "var(--surface-muted)", borderRadius: 6, marginBottom: 12 }}/>
                <div style={{ height: 32, background: "#000", borderRadius: 6, color: "#fff", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600 }}>Sign in</div>
              </div>
            </div>
          </Card>
        </div>
      ) : tab === "notifications" ? (
        <Card title="Notification preferences">
          <p style={{ color: "var(--text-muted)", fontSize: 13, margin: "0 0 18px" }}>Control when you and your team receive email & in-app alerts.</p>
          {[
            { cat: "Tickets", items: [
              { name: "A new ticket is created", email: true, app: true },
              { name: "A ticket is assigned to me", email: true, app: true },
              { name: "A customer replies", email: true, app: true },
              { name: "An internal note mentions me", email: false, app: true },
              { name: "A ticket is escalated", email: true, app: true },
            ]},
            { cat: "License & usage", items: [
              { name: "Limit reaches 75%", email: false, app: true },
              { name: "Limit reaches 90%", email: true, app: true },
              { name: "License is about to expire", email: true, app: true },
            ]},
            { cat: "Team", items: [
              { name: "A user is invited", email: false, app: true },
              { name: "A user accepts their invitation", email: true, app: true },
            ]},
          ].map((g) => (
            <div key={g.cat} style={{ marginBottom: 18 }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>{g.cat}</div>
              <div style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
                {g.items.map((it, i) => (
                  <div key={it.name} style={{ display: "grid", gridTemplateColumns: "1fr 100px 100px", padding: "12px 16px", borderBottom: i === g.items.length - 1 ? 0 : "1px solid var(--border)", alignItems: "center", fontSize: 13.5 }}>
                    <div style={{ fontWeight: 500 }}>{it.name}</div>
                    <label className="row" style={{ gap: 6, justifyContent: "center", cursor: "pointer" }}><input type="checkbox" defaultChecked={it.email}/> Email</label>
                    <label className="row" style={{ gap: 6, justifyContent: "center", cursor: "pointer" }}><input type="checkbox" defaultChecked={it.app}/> In-app</label>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="row" style={{ justifyContent: "flex-end", gap: 8 }}>
            <Button variant="ghost">Cancel</Button>
            <Button variant="primary" onClick={() => toast.success("Notification preferences saved.")}>Save changes</Button>
          </div>
        </Card>
      ) : tab === "security" ? (
        <div className="two-col-7-5">
          <div>
            <Card title="Authentication">
              <div style={{ marginBottom: 16 }}>
                <div className="row" style={{ justifyContent: "space-between", marginBottom: 4 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Require two-factor authentication</div>
                  <input type="checkbox" defaultChecked/>
                </div>
                <p style={{ fontSize: 12.5, color: "var(--text-muted)", margin: 0 }}>All users must set up 2FA before signing in.</p>
              </div>
              <div className="divider"/>
              <div style={{ marginBottom: 16 }}>
                <div className="row" style={{ justifyContent: "space-between", marginBottom: 4 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>Single sign-on (SSO)</div>
                  <Badge status="trial">Coming soon</Badge>
                </div>
                <p style={{ fontSize: 12.5, color: "var(--text-muted)", margin: 0 }}>Connect Google Workspace, Microsoft 365, or any SAML provider.</p>
              </div>
              <div className="divider"/>
              <div>
                <div className="field"><label className="label">Session timeout</label>
                  <select className="select" defaultValue="60">
                    <option value="15">15 minutes</option><option value="30">30 minutes</option><option value="60">1 hour</option><option value="240">4 hours</option><option value="1440">24 hours</option>
                  </select>
                  <div className="help">Users are signed out automatically after this period of inactivity.</div>
                </div>
              </div>
            </Card>

            <div style={{ height: 16 }}/>

            <Card title="IP allow list">
              <p style={{ color: "var(--text-muted)", fontSize: 13, margin: "0 0 14px" }}>Restrict access to your workspace to specific IP addresses.</p>
              <div className="row" style={{ gap: 8 }}>
                <input className="input mono" placeholder="e.g. 197.210.0.0/16" style={{ flex: 1 }}/>
                <Button variant="secondary" icon="plus">Add</Button>
              </div>
              <div style={{ marginTop: 12, fontSize: 12.5, color: "var(--text-muted)" }}>No IPs configured · all IPs are allowed</div>
            </Card>
          </div>

          <div className="side-panel">
            <Card title="Recent sign-ins">
              {[
                { who: "Nnamdi Eze", where: "Lagos, NG", ip: "197.210.45.12", time: "Just now", current: true },
                { who: "Nnamdi Eze", where: "Lagos, NG", ip: "197.210.45.12", time: "Yesterday, 09:00" },
                { who: "Mubarak Adewale", where: "Abuja, NG", ip: "105.112.88.4", time: "2 days ago" },
                { who: "Qudus Salawu", where: "Ibadan, NG", ip: "102.89.31.221", time: "3 days ago" },
              ].map((s, i) => (
                <div key={i} className="row" style={{ padding: "10px 0", borderBottom: i === 3 ? 0 : "1px solid var(--border)", alignItems: "center", gap: 10 }}>
                  <Avatar name={s.who} size="sm"/>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{s.who} {s.current ? <span style={{ fontSize: 11, color: "var(--success)", marginLeft: 4 }}>● this session</span> : null}</div>
                    <div className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.where} · {s.ip}</div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, color: "var(--text-muted)" }}>{s.time}</div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      ) : (
        <div className="two-col-7-5">
          <Card title="Current plan">
            <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
              <div>
                <div className="row" style={{ gap: 8, marginBottom: 4 }}>
                  <h3 style={{ margin: 0, fontSize: 22, letterSpacing: "-0.02em" }}>Enterprise</h3>
                  <Badge status="active">Paid</Badge>
                </div>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: 13.5 }}>Billed annually · renews 31 Dec 2026</p>
              </div>
              <div className="mono" style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em" }}>₦150,000<span style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 400 }}>/mo</span></div>
            </div>
            <div className="divider"/>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginTop: 12 }}>
              {[["Customers", "100"], ["Tickets / month", "10,000"], ["Users", "50"], ["Products / services", "20"]].map(([k, v]) => (
                <div key={k} className="row" style={{ alignItems: "center", gap: 8 }}>
                  <Icon name="check-circle" size={16} style={{ color: "var(--success)" }}/>
                  <span style={{ fontSize: 13 }}><b>{v}</b> <span style={{ color: "var(--text-muted)" }}>{k}</span></span>
                </div>
              ))}
            </div>
            <div className="row" style={{ marginTop: 20, gap: 8 }}>
              <Button variant="secondary" size="sm">Change plan</Button>
              <Button variant="ghost" size="sm">View invoices</Button>
              <span className="spacer"/>
              <Button variant="destructive" size="sm">Cancel subscription</Button>
            </div>
          </Card>

          <div className="side-panel">
            <Card title="Payment method">
              <div className="row" style={{ gap: 12, alignItems: "center" }}>
                <div style={{ width: 44, height: 30, background: "linear-gradient(135deg, #1a1a1a, #000)", borderRadius: 4, display: "grid", placeItems: "center", color: "#fff", fontSize: 9, fontWeight: 700, letterSpacing: "0.04em" }}>VISA</div>
                <div style={{ flex: 1 }}>
                  <div className="mono" style={{ fontSize: 13, fontWeight: 500 }}>•••• •••• •••• 4242</div>
                  <div style={{ fontSize: 11.5, color: "var(--text-muted)" }}>Expires 08/2028</div>
                </div>
                <button className="btn btn-ghost btn-xs">Update</button>
              </div>
            </Card>
            <Card title="Next invoice">
              <div className="row" style={{ justifyContent: "space-between", marginBottom: 6 }}><span style={{ color: "var(--text-muted)", fontSize: 13 }}>Date</span><span className="mono">01 Jun 2026</span></div>
              <div className="row" style={{ justifyContent: "space-between", marginBottom: 6 }}><span style={{ color: "var(--text-muted)", fontSize: 13 }}>Amount</span><span className="mono" style={{ fontWeight: 600 }}>₦150,000.00</span></div>
              <div className="row" style={{ justifyContent: "space-between" }}><span style={{ color: "var(--text-muted)", fontSize: 13 }}>Method</span><span className="mono" style={{ fontSize: 12 }}>•••• 4242</span></div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

Object.assign(window, { RepsScreenReal, TicketFormsReal, SettingsReal });

// ===== tenant-app.jsx =====
// tenant-app.jsx — root App for tenant portal: router, tweaks, theme wiring

const TENANT_TWEAKS = /*EDITMODE-BEGIN*/{
  "density": "regular",
  "sidebarStyle": "dark",
  "emptyPreview": false
}/*EDITMODE-END*/;

const TenantApp = () => {
  const [route, navigate] = useHashRoute("/dashboard");
  const [t, setTweak] = useTweaks(TENANT_TWEAKS);

  // Apply tweaks at the root level
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.density = t.density;
    root.dataset.sidebar = t.sidebarStyle;
  }, [t.density, t.sidebarStyle]);

  // Auth gate: /login → outside layout
  if (route === "/login" || route === "/") {
    return <>
      <TenantLogin/>
      <Tweaks t={t} setTweak={setTweak}/>
    </>;
  }

  return (
    <TenantStoreProvider>
      <TenantStoreInner route={route} t={t} setTweak={setTweak}/>
    </TenantStoreProvider>
  );
};

// Inner so we can read emptyMode out of store after provider mounts
const TenantStoreInner = ({ route, t, setTweak }) => {
  const store = useTenant();
  // Bridge tweak → store
  useEffect(() => { store.setEmptyMode(!!t.emptyPreview); }, [t.emptyPreview]);

  let screen = null;
  let params = null;

  if (route === "/dashboard") screen = <TenantDashboard/>;
  else if (route === "/tickets") screen = <TicketsList/>;
  else if (route === "/tickets/new") screen = <CreateTicket/>;
  else if ((params = matchRoute("/tickets/:id", route))) screen = <TicketDetail id={params.id}/>;
  else if (route === "/customers") screen = <CustomersList/>;
  else if ((params = matchRoute("/customers/:id", route))) screen = <CustomerDetail id={params.id}/>;
  else if (route === "/products") screen = <ProductsList/>;
  else if ((params = matchRoute("/products/:id", route))) screen = <ProductDetail id={params.id}/>;
  else if (route === "/users") screen = <UsersAndRoles/>;
  else if (route === "/hierarchy") screen = <UsersAndRoles initialTab="hierarchy"/>;
  else if (route === "/reps") screen = <UsersAndRoles initialTab="reps"/>;
  else if (route === "/license") screen = <LicenseUsage/>;
  else if (route === "/reports") screen = <Reports/>;
  else if (route === "/audit") screen = <AuditTrail/>;
  else if (route === "/forms") screen = <TicketFormsReal/>;
  else if (route === "/settings") screen = <SettingsReal/>;
  else screen = <Card><EmptyState icon="search" title="Page not found" desc={`No screen for ${route}`} action={<Button variant="primary" onClick={() => { window.location.hash = "/dashboard"; }}>Back to dashboard</Button>}/></Card>;

  return <>
    <TenantLayout route={route}>{screen}</TenantLayout>
    <Tweaks t={t} setTweak={setTweak}/>
  </>;
};

const Tweaks = ({ t, setTweak }) => (
  <TweaksPanel title="Tweaks">
    <TweakSection label="Layout density"/>
    <TweakRadio value={t.density} options={["compact", "regular", "comfortable"]} onChange={(v) => setTweak("density", v)}/>
    <TweakSection label="Sidebar style"/>
    <TweakRadio value={t.sidebarStyle} options={["dark", "light"]} onChange={(v) => setTweak("sidebarStyle", v)}/>
    <TweakSection label="Role preview"/>
    <p style={{ fontSize: 11, color: "#6b6b6b", margin: "0 0 6px", lineHeight: 1.45 }}>Use the role chip in the top bar to switch your active role view across the app.</p>
    <TweakSection label="Empty-state preview"/>
    <TweakToggle label="Show empty dashboard" value={!!t.emptyPreview} onChange={(v) => setTweak("emptyPreview", v)}/>
  </TweaksPanel>
);

// ═════════════════════════════════════════════════════════════════════════════
// Added features — Audit Trail · Role management · Escalation hierarchy
// ═════════════════════════════════════════════════════════════════════════════

// ── Audit trail ──────────────────────────────────────────────────────────────
const AUDIT_TYPES = {
  created:   { label: "Created",   cls: "badge-new" },
  updated:   { label: "Updated",   cls: "badge-in-progress" },
  assigned:  { label: "Assigned",  cls: "badge-open" },
  escalated: { label: "Escalated", cls: "badge-pending" },
  archived:  { label: "Archived",  cls: "badge-archived" },
  role:      { label: "Role",      cls: "badge-trial" },
  user:      { label: "User",      cls: "badge-low" },
  reply:     { label: "Reply",     cls: "badge-soft" },
  auth:      { label: "Auth",      cls: "badge-soft" },
  security:  { label: "Security",  cls: "badge-high" },
};
const auditMeta = (type) => AUDIT_TYPES[type] || AUDIT_TYPES.updated;
const auditTsParse = (s = "") => { const [d, t] = s.split(", "); const dt = new Date(`${d} ${t || ""}`); return isNaN(dt.getTime()) ? 0 : dt.getTime(); };

const AuditTrail = () => {
  const { data } = useTenant();
  const toast = useToast();
  const [q, setQ] = useState("");
  const [type, setType] = useState("all");
  const [actor, setActor] = useState("all");
  const [page, setPage] = useState(1);
  const [detail, setDetail] = useState(null);
  const [sort, setSort] = useState({ key: null, dir: "asc" });
  const toggleSort = (key) => setSort((s) => s.key === key ? (s.dir === "asc" ? { key, dir: "desc" } : { key: null, dir: "asc" }) : { key, dir: "asc" });
  const perPage = 8;

  const actors = useMemo(() => Array.from(new Set(data.audit.map((a) => a.actor))), [data.audit]);
  const rows = useMemo(() => data.audit.filter((a) => {
    if (type !== "all" && a.type !== type) return false;
    if (actor !== "all" && a.actor !== actor) return false;
    if (q.trim() && !(`${a.actor} ${a.action} ${a.target || ""}`.toLowerCase().includes(q.trim().toLowerCase()))) return false;
    return true;
  }), [data.audit, type, actor, q]);

  const AUDIT_SORTERS = {
    ts: (a, b) => auditTsParse(a.ts) - auditTsParse(b.ts),
    actor: (a, b) => a.actor.localeCompare(b.actor),
    action: (a, b) => a.action.localeCompare(b.action),
    type: (a, b) => a.type.localeCompare(b.type),
  };
  const sorted = useMemo(() => {
    if (!sort.key || !AUDIT_SORTERS[sort.key]) return rows;
    const arr = [...rows].sort(AUDIT_SORTERS[sort.key]);
    return sort.dir === "desc" ? arr.reverse() : arr;
  }, [rows, sort]);

  useEffect(() => { setPage(1); }, [type, actor, q, sort]);
  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage));
  const pageRows = sorted.slice((page - 1) * perPage, page * perPage);
  const anyFilter = q || type !== "all" || actor !== "all" || sort.key;
  const resetAll = () => { setQ(""); setType("all"); setActor("all"); setSort({ key: null, dir: "asc" }); };

  return (
    <>
      <div className="page-hd">
        <div>
          <h1>Audit trail</h1>
          <p className="sub">A chronological record of every action taken across your workspace.</p>
        </div>
        <div className="actions">
          <Button variant="secondary" size="sm" icon="download" onClick={() => toast.success(`Exporting ${rows.length} events to CSV…`, "Export started")}>Export log</Button>
        </div>
      </div>

      <div className="tbl-wrap table-menus">
        <div className="tbl-toolbar">
          <div className="input-wrap" style={{ flex: 1, maxWidth: 380 }}>
            <span className="input-icon"><Icon name="search" size={15}/></span>
            <input className="input has-icon" style={{ height: 36 }} placeholder="Search by user, action or target..." value={q} onChange={(e) => setQ(e.target.value)}/>
          </div>
          <div className="spacer"/>
          <span style={{ fontSize: 12.5, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{sorted.length} of {data.audit.length} events</span>
          {anyFilter ? <Button variant="ghost" size="sm" icon="x" onClick={resetAll}>Reset</Button> : null}
        </div>
        {sorted.length === 0 ? (
          <EmptyState icon="history" title="No matching events" desc="Try adjusting your filters or search term." action={<Button variant="secondary" onClick={resetAll}>Clear filters</Button>}/>
        ) : (
          <>
          <table className="tbl">
            <thead><tr>
              <th style={{ minWidth: 150 }}><Th label="Timestamp" sortKey="ts" sort={sort} onSort={toggleSort}/></th>
              <th><Th label="User" sortKey="actor" sort={sort} onSort={toggleSort} filter={{ value: actor, set: setActor, all: "all", options: [{ value: "all", label: "All users" }, ...actors.map((a) => ({ value: a, label: a }))] }}/></th>
              <th><Th label="Action" sortKey="action" sort={sort} onSort={toggleSort}/></th>
              <th>Target</th>
              <th><Th label="Event" sortKey="type" sort={sort} onSort={toggleSort} filter={{ value: type, set: setType, all: "all", options: [{ value: "all", label: "All events" }, ...Object.keys(AUDIT_TYPES).map((k) => ({ value: k, label: AUDIT_TYPES[k].label }))] }}/></th>
            </tr></thead>
            <tbody>
              {pageRows.map((a) => {
                const m = auditMeta(a.type);
                return (
                  <tr key={a.id} className="clickable" onClick={() => setDetail(a)} title="View event details">
                    <td className="mono" style={{ fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{a.ts}</td>
                    <td><span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 500, whiteSpace: "nowrap" }}><Avatar name={a.actor} size="sm"/> {a.actor}</span></td>
                    <td style={{ minWidth: 280 }}>{a.action}</td>
                    <td>{a.target ? <span className="mono" style={{ fontSize: 12 }}>{a.target}</span> : <span style={{ color: "var(--text-subtle)" }}>—</span>}</td>
                    <td><span className={`badge ${m.cls}`}>{m.label}</span></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination page={page} totalPages={totalPages} onPage={setPage} summary={`Showing ${(page - 1) * perPage + 1}–${Math.min(page * perPage, sorted.length)} of ${sorted.length} events`}/>
          </>
        )}
      </div>

      <AuditDetailModal entry={detail} onClose={() => setDetail(null)}/>
    </>
  );
};

// ── Audit event detail (browser / OS / IP / location) ────────────────────────
const AuditDetailModal = ({ entry, onClose }) => {
  if (!entry) return null;
  const m = auditMeta(entry.type);
  const src = sourceFor(entry);
  const Row = ({ label, children, mono }) => (
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 12, padding: "9px 0", borderBottom: "1px solid var(--border)", alignItems: "center" }}>
      <div style={{ fontSize: 12.5, color: "var(--text-muted)", fontWeight: 500 }}>{label}</div>
      <div className={mono ? "mono" : ""} style={{ fontSize: 13 }}>{children}</div>
    </div>
  );
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ width: "min(540px, calc(100vw - 32px))" }}>
        <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
          <h2 style={{ marginBottom: 0 }}>Event details</h2>
          <span className={`badge ${m.cls}`}>{m.label}</span>
        </div>
        <p style={{ marginBottom: 12 }}>{entry.action}</p>
        <div>
          <Row label="Event ID" mono>{entry.id}</Row>
          <Row label="Timestamp" mono>{entry.ts}</Row>
          <Row label="User"><span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Avatar name={entry.actor} size="sm"/> {entry.actor}</span></Row>
          <Row label="Target" mono>{entry.target || "—"}</Row>
          <Row label="Browser">{src.browser}{src.os ? ` · ${src.os}` : ""}</Row>
          <Row label="IP address" mono>{src.ip}</Row>
          <Row label="Location">{src.location || "—"}</Row>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14, fontSize: 11.5, color: "var(--text-subtle)" }}>
          <Icon name="lock" size={12}/> Browser and OS are read from the session; the public IP is resolved live.
        </div>
        <div className="modal-actions" style={{ marginTop: 16 }}>
          <Button variant="secondary" onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

// ── Escalation card (ticket detail side panel) ───────────────────────────────
const EscalationCard = ({ t }) => {
  const { data, escalateTicket } = useTenant();
  const toast = useToast();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const ladder = data.hierarchy;
  const current = t.escalation?.level || 1;
  const atTop = current >= ladder.length;
  const next = atTop ? null : ladder[current];
  const doEscalate = () => {
    escalateTicket(t.id, current + 1);
    setConfirmOpen(false);
    toast.success(`Escalated to ${next.name} — ${next.title}`, "Ticket escalated");
  };
  return (
    <div className="side-card">
      <div className="side-hd"><b>Escalation</b>{current > 1 ? <Badge status="warning" dot>Level {current}</Badge> : null}</div>
      <div className="side-bd">
        <div className="ladder">
          {ladder.map((r, i) => {
            const lvl = i + 1;
            const state = lvl === current ? "current" : lvl < current ? "done" : "future";
            return (
              <div key={r.email} className={`rung ${state}`}>
                <span className="ravatar"><Avatar name={r.name} size="md" style={state === "current" ? { background: "#000" } : state === "future" ? { opacity: 0.4 } : {}}/></span>
                <div className="rmeta">
                  <div className="rtitle">{r.title}</div>
                  <div className="rname" style={state === "future" ? { color: "var(--text-subtle)" } : {}}>{r.name}</div>
                </div>
                {lvl === current ? <Badge status="warning" dot>Current</Badge> : lvl < current ? <Icon name="check" size={14} stroke={2.4}/> : null}
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: 12 }}>
          {atTop ? (
            <div className="banner info" style={{ fontSize: 12.5 }}><span className="icon"><Icon name="info" size={14}/></span><div>At the <b>top of the escalation chain</b>. No higher tier to escalate to.</div></div>
          ) : (
            <Button variant="secondary" size="sm" icon="arrow-up" block onClick={() => setConfirmOpen(true)}>Escalate to {next.title}</Button>
          )}
        </div>
      </div>
      <Modal open={confirmOpen} onClose={() => setConfirmOpen(false)} title={`Escalate ${t.id}?`}
        actions={<>
          <Button variant="ghost" onClick={() => setConfirmOpen(false)}>Cancel</Button>
          <Button variant="primary" icon="arrow-up" onClick={doEscalate}>Escalate ticket</Button>
        </>}>
        <p>This will escalate the ticket to <b>{next?.name}</b> ({next?.title}). They'll be notified, and the change is recorded in the ticket history and audit trail.</p>
      </Modal>
    </div>
  );
};

// ── Team hierarchy page ──────────────────────────────────────────────────────
const TeamHierarchy = ({ embedded }) => {
  const { data } = useTenant();
  const navigate = (to) => { window.location.hash = to; };
  const ladder = data.hierarchy;
  const escalatedCount = data.tickets.filter((t) => (t.escalation?.level || 1) > 1).length;
  const topDown = [...ladder].reverse();
  return (
    <>
      {!embedded ? (
        <div className="page-hd">
          <div>
            <h1>Team hierarchy</h1>
            <p className="sub">Your support escalation chain. Tickets move upward through these tiers.</p>
          </div>
        </div>
      ) : null}
      <div className="two-col-7-5" style={{ alignItems: "start" }}>
        <Card title="Escalation chain">
          <div className="org">
            {topDown.map((r, i) => (
              <Fragment key={r.email}>
                <div className="org-node">
                  <Avatar name={r.name} size="lg"/>
                  <div className="org-info">
                    <div className="org-name">{r.name}</div>
                    <div className="org-title">{r.title}</div>
                    <div className="org-mail mono">{r.email}</div>
                  </div>
                  <span className="org-lvl mono">L{r.level}</span>
                </div>
                {i < topDown.length - 1 ? <div className="org-link"/> : null}
              </Fragment>
            ))}
          </div>
        </Card>
        <div className="side-panel">
          <Card title="How escalation works">
            <div style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>
              <p style={{ marginTop: 0 }}>When a ticket can't be resolved at the current tier, an agent or manager escalates it one level up from the ticket's detail view.</p>
              <p style={{ marginBottom: 0 }}>Every escalation is recorded in the <a onClick={() => navigate("/audit")} style={{ color: "var(--fg)", textDecoration: "underline", textUnderlineOffset: 2, cursor: "pointer" }}>audit trail</a> and notifies the receiving manager.</p>
            </div>
          </Card>
          <Card pad={false}>
            <div className="side-hd" style={{ padding: "14px 16px" }}><b style={{ fontSize: 13 }}>At a glance</b></div>
            <div style={{ padding: "4px 16px 14px" }}>
              <div className="row" style={{ justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid var(--border)" }}><span style={{ color: "var(--text-muted)", fontSize: 13 }}>Escalation tiers</span><span className="mono" style={{ fontWeight: 600 }}>{ladder.length}</span></div>
              <div className="row" style={{ justifyContent: "space-between", padding: "8px 0" }}><span style={{ color: "var(--text-muted)", fontSize: 13 }}>Currently escalated tickets</span><span className="mono" style={{ fontWeight: 600 }}>{escalatedCount}</span></div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

// ── Role management (Roles & permissions tab) ────────────────────────────────
const PERM_GROUPS = ["Tickets", "Customers & products", "Administration", "Reporting"];

const RoleEditorModal = ({ state, onClose }) => {
  const { addRole, updateRole, data } = useTenant();
  const toast = useToast();
  const readOnly = state.mode === "view";
  const base = state.role || {};
  const [name, setName] = useState(base.name || "");
  const [desc, setDesc] = useState(base.desc || "");
  const [perms, setPerms] = useState(new Set(base.perms || []));
  const toggle = (id) => { if (readOnly) return; setPerms((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; }); };
  const save = () => {
    const payload = { name: name.trim() || "Untitled role", desc: desc.trim(), perms: Array.from(perms) };
    if (state.mode === "edit") { updateRole(base.key, payload); toast.success(`Role "${payload.name}" updated.`); }
    else { addRole(payload); toast.success(`Role "${payload.name}" created.`); }
    onClose();
  };
  const title = state.mode === "create" ? "Create a role" : state.mode === "edit" ? `Edit ${base.name}` : base.name;
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ width: "min(640px, calc(100vw - 32px))" }}>
        <h2>{title}</h2>
        <p>{readOnly ? "System roles are read-only. Duplicate this role to create an editable copy." : "Give the role a name and choose what its members can do."}</p>
        {!readOnly ? (
          <div className="two-col-1-1" style={{ marginBottom: 6 }}>
            <div className="field"><label className="label">Role name <span className="required">*</span></label><input className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Billing Specialist" autoFocus/></div>
            <div className="field"><label className="label">Description</label><input className="input" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Short summary"/></div>
          </div>
        ) : null}
        <label className="label" style={{ marginTop: 4 }}>Permissions <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>· {perms.size} selected</span></label>
        <div style={{ maxHeight: 320, overflow: "auto", margin: "2px -4px 0", padding: "0 4px" }}>
          {PERM_GROUPS.map((g) => (
            <div key={g} style={{ marginBottom: 12 }}>
              <div className="dropdown-hd" style={{ padding: "4px 2px 8px" }}>{g}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {data.permCatalog.filter((p) => p.group === g).map((p) => {
                  const on = perms.has(p.id);
                  return (
                    <div key={p.id} className={`perm-check ${on ? "on" : ""} ${readOnly ? "ro" : ""}`} onClick={() => toggle(p.id)}>
                      <span className="pc-box">{on ? <Icon name="check" size={12} stroke={2.8}/> : null}</span>
                      <span style={{ fontSize: 12.5 }}>{p.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="modal-actions" style={{ marginTop: 16 }}>
          <Button variant="ghost" onClick={onClose}>{readOnly ? "Close" : "Cancel"}</Button>
          {!readOnly ? <Button variant="primary" icon="check" onClick={save} disabled={!name.trim()}>{state.mode === "edit" ? "Save changes" : "Create role"}</Button> : null}
        </div>
      </div>
    </div>
  );
};

const RolesPanel = () => {
  const { data, deleteRole } = useTenant();
  const toast = useToast();
  const [editor, setEditor] = useState(null);
  const [delRole, setDelRole] = useState(null);
  const memberCount = (roleName) => data.users.filter((u) => u.role === roleName && u.status === "Active").length;
  return (
    <>
      <div className="section-hd">
        <h2>Roles <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>· {data.roleDefs.length}</span></h2>
        <Button variant="primary" size="sm" icon="plus" onClick={() => setEditor({ mode: "create", role: { perms: ["ticket-view"] } })}>Create role</Button>
      </div>
      <div className="two-col-7-5" style={{ alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {data.roleDefs.map((r) => (
            <div key={r.key} className="card card-pad">
              <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", gap: 8 }}>
                <div className="row" style={{ gap: 10, alignItems: "center", minWidth: 0 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--surface-muted)", display: "grid", placeItems: "center", flexShrink: 0 }}><Icon name="shield" size={18}/></div>
                  <div style={{ minWidth: 0 }}>
                    <div className="row" style={{ gap: 8 }}>
                      <span style={{ fontWeight: 600 }}>{r.name}</span>
                      {r.system ? <Badge status="archived">System</Badge> : <Badge status="open">Custom</Badge>}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{r.desc}</div>
                  </div>
                </div>
                <KebabMenu items={[
                  { label: r.system ? "View permissions" : "Edit role", icon: "edit", onClick: () => setEditor({ mode: r.system ? "view" : "edit", role: r }) },
                  { label: "Duplicate", icon: "plus", onClick: () => setEditor({ mode: "create", role: { name: r.name + " (copy)", desc: r.desc, perms: r.perms } }) },
                  ...(r.system ? [] : [{ sep: true }, { label: "Delete role", icon: "trash", destructive: true, onClick: () => setDelRole(r) }]),
                ]}/>
              </div>
              <div className="row" style={{ marginTop: 12, gap: 16, fontSize: 12, color: "var(--text-muted)" }}>
                <span className="row-tight"><Icon name="user" size={13}/> {memberCount(r.name)} member{memberCount(r.name) === 1 ? "" : "s"}</span>
                <span className="row-tight"><Icon name="check-circle" size={13}/> {r.perms.length} permission{r.perms.length === 1 ? "" : "s"}</span>
              </div>
            </div>
          ))}
        </div>
        <Card title="Permission matrix" pad={false}>
          <div style={{ overflow: "auto" }}>
            <table className="tbl">
              <thead><tr><th style={{ minWidth: 190 }}>Permission</th>{data.roleDefs.map((r) => <th key={r.key} style={{ textAlign: "center", whiteSpace: "nowrap" }}>{r.name}</th>)}</tr></thead>
              <tbody>
                {data.permCatalog.map((p) => (
                  <tr key={p.id}>
                    <td style={{ fontWeight: 500 }}>{p.label}</td>
                    {data.roleDefs.map((r) => (
                      <td key={r.key} style={{ textAlign: "center", color: r.perms.includes(p.id) ? "var(--fg)" : "var(--text-subtle)" }}>
                        {r.perms.includes(p.id) ? <Icon name="check" size={15} stroke={2.2}/> : "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
      {editor ? <RoleEditorModal state={editor} onClose={() => setEditor(null)}/> : null}
      <Modal open={!!delRole} onClose={() => setDelRole(null)} title={`Delete ${delRole?.name}?`}
        actions={<>
          <Button variant="ghost" onClick={() => setDelRole(null)}>Cancel</Button>
          <Button variant="destructive" onClick={() => { deleteRole(delRole.key); toast.success(`Role "${delRole.name}" deleted.`); setDelRole(null); }}>Delete role</Button>
        </>}>
        <p>Members currently assigned to <b>{delRole?.name}</b> will need to be reassigned to another role. This action cannot be undone.</p>
      </Modal>
    </>
  );
};

// ── Import a ticket form (JSON upload / paste) ───────────────────────────────
const FORM_IMPORT_SAMPLE = {
  name: "Onboarding request",
  products: ["Kusala"],
  fields: [
    { type: "text", label: "Company name", required: true, icon: "edit" },
    { type: "select", label: "Account tier", required: true, icon: "tag" },
    { type: "textarea", label: "What do you need help with?", required: true, icon: "form" },
    { type: "file", label: "Supporting documents", required: false, icon: "paperclip" },
  ],
};

const ImportFormModal = ({ open, onClose }) => {
  const { addForm } = useTenant();
  const toast = useToast();
  const [raw, setRaw] = useState("");
  const [error, setError] = useState("");
  const [parsed, setParsed] = useState(null);
  const fileRef = useRef();

  useEffect(() => { if (!open) { setRaw(""); setError(""); setParsed(null); } }, [open]);

  const validate = (text) => {
    setError(""); setParsed(null);
    if (!text.trim()) return;
    let obj;
    try { obj = JSON.parse(text); } catch (e) { setError("That isn't valid JSON. Check for a missing comma, bracket or quote."); return; }
    const fieldDefs = obj.fields || obj.fieldDefs;
    if (!obj.name || !Array.isArray(fieldDefs) || fieldDefs.length === 0) {
      setError('The form needs a "name" and a non-empty "fields" array.'); return;
    }
    setParsed({
      name: String(obj.name),
      products: Array.isArray(obj.products) ? obj.products : [],
      fieldDefs: fieldDefs.map((f) => ({ type: f.type || "text", label: f.label || "Untitled field", required: !!f.required, icon: f.icon || "edit" })),
    });
  };
  const onText = (t) => { setRaw(t); validate(t); };
  const onFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onText(String(reader.result));
    reader.readAsText(file);
  };
  const loadSample = () => onText(JSON.stringify(FORM_IMPORT_SAMPLE, null, 2));
  const doImport = () => { if (!parsed) return; addForm({ ...parsed, _imported: true }); toast.success(`Imported "${parsed.name}" with ${parsed.fieldDefs.length} fields.`); onClose(); };

  if (!open) return null;
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} style={{ width: "min(600px, calc(100vw - 32px))" }}>
        <h2>Import a ticket form</h2>
        <p>Upload or paste a form definition (JSON). It needs a <span className="mono">name</span> and a <span className="mono">fields</span> array.</p>
        <div className="row" style={{ gap: 8, marginBottom: 12 }}>
          <input ref={fileRef} type="file" accept="application/json,.json" onChange={onFile} style={{ display: "none" }}/>
          <Button variant="secondary" size="sm" icon="download" onClick={() => fileRef.current && fileRef.current.click()}>Choose .json file</Button>
          <Button variant="ghost" size="sm" icon="sparkles" onClick={loadSample}>Load sample</Button>
        </div>
        <textarea className="textarea mono" style={{ minHeight: 150, fontSize: 12 }} placeholder={'{\n  "name": "Onboarding request",\n  "products": ["Kusala"],\n  "fields": [ { "type": "text", "label": "Company name", "required": true } ]\n}'} value={raw} onChange={(e) => onText(e.target.value)}/>
        {error ? <div className="banner error" style={{ marginTop: 12, fontSize: 12.5 }}><span className="icon"><Icon name="warning" size={14}/></span><div>{error}</div></div> : null}
        {parsed ? (
          <div className="banner success" style={{ marginTop: 12, fontSize: 12.5 }}>
            <span className="icon"><Icon name="check-circle" size={14}/></span>
            <div><b>{parsed.name}</b> — {parsed.fieldDefs.length} fields{parsed.products.length ? `, ${parsed.products.length} product(s)` : ""}. Ready to import.</div>
          </div>
        ) : null}
        <div className="modal-actions" style={{ marginTop: 16 }}>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
          <Button variant="primary" icon="download" onClick={doImport} disabled={!parsed}>Import form</Button>
        </div>
      </div>
    </div>
  );
};

// Mount
ReactDOM.createRoot(document.getElementById("root")).render(
  <ToastProvider><TenantApp/></ToastProvider>
);
