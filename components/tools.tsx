import React from "react";

// components/tools.tsx

type Skill = {
    id: string;
    name: string;
    percent: number;
    level: "Básico" | "Médio" | "Avançado";
    icon: React.ReactNode;
};

const skills: Skill[] = [
    {
        id: "ts",
        name: "TypeScript",
        percent: 30,
        level: "Básico",
        icon: (
            <svg viewBox="0 0 128 128" width="36" height="36" aria-hidden>
                <rect width="128" height="128" rx="24" fill="#007ACC" />
                <path fill="#fff" d="M40 36v56h12V64h8c11 0 20-7 20-18 0-11-9-18-20-18H40zm12 8h9c4 0 8 2 8 7 0 6-4 8-8 8h-9V44z" />
                <path fill="#fff" d="M84 92h12V48h-12v44z" />
            </svg>
        ),
    },
    {
        id: "js",
        name: "JavaScript",
        percent: 70,
        level: "Médio",
        icon: (
            <svg viewBox="0 0 128 128" width="36" height="36" aria-hidden>
                <rect width="128" height="128" rx="24" fill="#F7DF1E" />
                <path d="M42 40h14c6 0 10 2 10 8 0 5-3 8-8 9-2 .3-4 .6-6 1-2.5.5-3.5 1-4 1.7-.6.9-.8 2-1 3.3l-2 11h-12l2-12c.6-3.5 1-7.5 1-11 0-7-2-8-5-8z" fill="#000" />
                <path d="M84 40h14v49H84z" fill="#000" />
            </svg>
        ),
    },
    {
        id: "next",
        name: "Next.js",
        percent: 65,
        level: "Médio",
        icon: (
            <svg viewBox="0 0 128 128" width="36" height="36" aria-hidden>
                <rect width="128" height="128" rx="24" fill="#000" />
                <path d="M34 40h10l24 35V40h10v48h-10L44 53v35H34z" fill="#fff" />
            </svg>
        ),
    },
    {
        id: "css",
        name: "CSS",
        percent: 60,
        level: "Médio",
        icon: (
            <svg viewBox="0 0 128 128" width="36" height="36" aria-hidden>
                <rect width="128" height="128" rx="24" fill="#1572B6" />
                <path fill="#fff" d="M32 20l8 88 28 8 28-8 8-88H32zM89 39h-50l2 19h46l-6 46-22 6v-15l13-4 3-21H48l-1-12h42l1-19z" />
            </svg>
        ),
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        percent: 55,
        level: "Médio",
        icon: (
            <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
                <rect width="24" height="24" rx="5" fill="#06B6D4" />
                <path d="M4 15c3-2 5-2 8 0 3-2 5-2 8 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M4 11c3-2 5-2 8 0 3-2 5-2 8 0" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        ),
    },
    {
        id: "vue",
        name: "Vue",
        percent: 60,
        level: "Médio",
        icon: (
            <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
                <rect width="24" height="24" rx="5" fill="#41B883" />
                <path d="M2 4l10 16L22 4h-4L12 15 6 4H2z" fill="#fff" />
            </svg>
        ),
    },
    {
        id: "apis",
        name: "APIs",
        percent: 75,
        level: "Avançado",
        icon: (
            <svg viewBox="0 0 24 24" width="36" height="36" aria-hidden>
                <rect width="24" height="24" rx="5" fill="#6B7280" />
                <path d="M7 7h10M7 12h10M7 17h10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: "node",
        name: "Node.js",
        percent: 80,
        level: "Avançado",
        icon: (
            <svg viewBox="0 0 128 128" width="36" height="36" aria-hidden>
                <rect width="128" height="128" rx="24" fill="#83CD29" />
                <path d="M64 32l28 16v32L64 96 36 80V48l28-16z" fill="#fff" opacity="0.95" />
            </svg>
        ),
    },
];

export default function ToolsGrid() {
    return (
        <section aria-labelledby="skills-heading" style={styles.section}>

            <div style={styles.grid}>
                {skills.map((s) => (
                    <article key={s.id} style={styles.card} aria-label={`${s.name} ${s.percent}% ${s.level}`}>
                        <div style={styles.header}>
                            <div style={styles.iconWrap}>{s.icon}</div>
                            <div style={styles.titleWrap}>
                                <div style={styles.name}>{s.name}</div>
                                <div style={styles.level}>{s.level}</div>
                            </div>
                            <div style={styles.percent}>{s.percent}%</div>
                        </div>

                        <div style={styles.progressBar} aria-hidden>
                            <div style={{ ...styles.progressFill, width: `${s.percent}%` }} />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

const styles: { [k: string]: React.CSSProperties } = {
    section: {
        padding: "8px 6px",
        maxWidth: 980,
        margin: "0 auto",
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        color: "#0F172A",
    },
    heading: {
        margin: "6px 0 14px",
        fontSize: 18,
        fontWeight: 600,
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: 12,
    },
    card: {
        background: "transparent",
        borderRadius: 8,
        padding: 10,
        boxShadow: "none",
        border: "none",
    },
    header: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8,
    },
    iconWrap: {
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
    },
    titleWrap: {
        flex: 1,
        minWidth: 0,
    },
    name: {
        fontSize: 13,
        fontWeight: 600,
        color: "#0F172A",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    level: {
        fontSize: 11,
        color: "#6B7280",
        marginTop: 2,
    },
    percent: {
        fontSize: 12,
        fontWeight: 700,
        color: "#374151",
        minWidth: 40,
        textAlign: "right",
    },
    progressBar: {
        height: 6,
        background: "#F3F4F6",
        borderRadius: 999,
        overflow: "hidden",
    },
    progressFill: {
        height: "100%",
        background: "linear-gradient(90deg,#6366F1,#06B6D4)",
        borderRadius: 999,
        transition: "width 500ms ease",
    },
};