"use client"

import * as React from "react"
import { X, FileText, ExternalLink, Mail } from "lucide-react"

export interface RecruiterDrawerProps {
  open: boolean
  onClose: () => void
}

export function RecruiterDrawer({ open, onClose }: RecruiterDrawerProps) {
  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Plain summary for recruiters and hiring managers"
      className="fixed inset-0 z-50 flex items-center justify-end bg-background/60 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="h-full w-full max-w-lg border-l border-border bg-card p-6 shadow-2xl overflow-y-auto sm:p-8 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-border pb-5">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-accent-electric">
              {"// THE BORING EXECUTIVE SUMMARY"}
            </span>
            <h2 className="mt-1 font-serif text-2xl text-foreground">
              Divaakar Naresh
            </h2>
            <p className="mt-1 font-mono text-xs text-muted-foreground">
              For recruiters &amp; managers who need the straight facts in 30 seconds.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors"
            aria-label="Close summary drawer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6 text-sm">
          {/* Target Roles */}
          <div className="rounded-lg border border-border bg-surface/60 p-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Role &amp; Focus
            </h3>
            <p className="font-semibold text-foreground">
              Python Developer · Agentic AI &amp; RAG Systems · Backend Engineer
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Specialized in production LLM inference, multi-agent workflows, vector search, and clean REST APIs.
            </p>
          </div>

          {/* Status & Availability */}
          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="rounded-md border border-border p-3">
              <span className="text-muted-foreground block text-[10px] uppercase">Availability</span>
              <span className="text-foreground font-semibold mt-0.5 block">Freelance &amp; Select Contracts</span>
              <span className="text-muted-foreground text-[10px]">Since Jan 2026</span>
            </div>
            <div className="rounded-md border border-border p-3">
              <span className="text-muted-foreground block text-[10px] uppercase">Location</span>
              <span className="text-foreground font-semibold mt-0.5 block">Chennai, India</span>
              <span className="text-muted-foreground text-[10px]">Open to Remote / Relocation</span>
            </div>
          </div>

          {/* Core Technical Capabilities */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Core Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {[
                "Python 3.12+",
                "FastAPI",
                "LangGraph",
                "LangChain",
                "Model Context Protocol (MCP)",
                "Qdrant",
                "RAG Systems",
                "Docker",
                "Linux",
                "AWS EC2",
                "Supabase",
                "PostgreSQL",
              ].map((s) => (
                <span key={s} className="rounded border border-border bg-surface px-2 py-0.5 text-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Track Record Summary
            </h3>
            <div className="space-y-3 text-xs text-foreground/90 font-sans">
              <div className="border-l-2 border-accent-electric pl-3">
                <div className="font-semibold text-foreground">AI Platform Engineer · CareShield</div>
                <div className="text-muted-foreground text-[11px] font-mono">Mavens i Softech · Jun 2026 – Aug 2026</div>
                <p className="mt-0.5">Built FastAPI backend with real-time Qwen LLM inference, dynamic persona-based interviews, and structured health output generation.</p>
              </div>

              <div className="border-l-2 border-border pl-3">
                <div className="font-semibold text-foreground">AI &amp; RAG Engineer · Sri Ramakrishna Math</div>
                <div className="text-muted-foreground text-[11px] font-mono">Dec 2025 – Jan 2026</div>
                <p className="mt-0.5">Extended Open WebUI with internal knowledge base using embeddings and vector similarity search across large document archives.</p>
              </div>

              <div className="border-l-2 border-border pl-3">
                <div className="font-semibold text-foreground">Business Strategist · Gomatha Milk (Part-time)</div>
                <div className="text-muted-foreground text-[11px] font-mono">Chennai · Apr 2021 – Present</div>
                <p className="mt-0.5">Managed unit economics, pricing algorithms based on cost inputs, supply/demand planning, and direct household distribution.</p>
              </div>

              <div className="border-l-2 border-border pl-3">
                <div className="font-semibold text-foreground">BCA (Bachelor of Computer Applications)</div>
                <div className="text-muted-foreground text-[11px] font-mono">Ramakrishna Mission Vivekananda College · 8.02 CGPA</div>
              </div>
            </div>
          </div>

          {/* Resume Download Slot */}
          <div className="rounded-lg border border-dashed border-border p-4 bg-surface/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="size-5 text-accent-electric" />
              <div>
                <span className="font-mono text-xs font-semibold text-foreground block">
                  Official Resume PDF
                </span>
                <span className="text-[11px] text-muted-foreground font-mono">
                  Divaakar Naresh · Updated Oct 2026
                </span>
              </div>
            </div>

            <a
              href="/Divaakar_Naresh_Resume.pdf"
              download
              className="rounded-full bg-accent-electric px-3 py-1 font-mono text-xs font-bold text-on-accent hover:opacity-90 transition-opacity"
            >
              Download PDF ↓
            </a>
          </div>

          {/* Direct Contact Actions */}
          <div className="border-t border-border pt-4 flex flex-wrap gap-2">
            <a
              href="mailto:divaakarnaresh2005@gmail.com"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-electric px-4 py-2 font-mono text-xs font-semibold text-background hover:opacity-90 transition-opacity"
            >
              <Mail className="size-3.5" />
              Email Divaakar
            </a>
            <a
              href="https://www.linkedin.com/in/divaakar2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 font-mono text-xs text-foreground hover:bg-surface transition-colors"
            >
              LinkedIn <ExternalLink className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
