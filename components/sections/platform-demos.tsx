"use client";

export function PlatformDemosSection() {
  return (
    <section id="platform" className="py-24 container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">
          Live Platform
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Completely Sovereign AI Stack
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From secure document ingestion to policy-controlled inference. Every
          component designed for government-grade security.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Chat Demo Preview */}
        <div className="demo-preview group">
          <div className="demo-header">
            <div className="demo-dot bg-[#ff5f57]"></div>
            <div className="demo-dot bg-[#febc2e]"></div>
            <div className="demo-dot bg-[#28c840]"></div>
            <span className="text-[10px] text-muted-foreground ml-2 font-mono">
              SOVEREIGN_CHAT_v2.1
            </span>
          </div>
          <div className="demo-content">
            <div className="mini-chat-user">
              What are the Q3 subsidy eligibility requirements?
            </div>
            <div className="mini-chat-ai">
              Based on{" "}
              <span className="text-primary">Policy Annex B-4</span>
              <span className="citation">[1]</span>, eligibility requires
              registered status and documentation per the 2024 guidelines
              <span className="citation">[2]</span>...
              <div className="mt-2 pt-2 border-t border-border/20">
                <span className="text-[7px] text-muted-foreground">
                  ◆ 2 sources cited • Verified
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3 p-2 bg-secondary/30 rounded border border-border/30">
              <span className="text-[8px] text-muted-foreground">
                Type query...
              </span>
              <span className="ml-auto w-1.5 h-3 bg-primary"></span>
            </div>
          </div>
        </div>

        {/* Audit Demo Preview */}
        <div className="demo-preview group">
          <div className="demo-header">
            <div className="demo-dot bg-[#ff5f57]"></div>
            <div className="demo-dot bg-[#febc2e]"></div>
            <div className="demo-dot bg-[#28c840]"></div>
            <span className="text-[10px] text-muted-foreground ml-2 font-mono">
              AUDIT_WATCHTOWER
            </span>
          </div>
          <div className="demo-content">
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="kpi-card">
                <div className="kpi-value text-primary">100%</div>
                <div className="kpi-label">Trust Score</div>
              </div>
              <div className="kpi-card">
                <div className="kpi-value text-foreground">0</div>
                <div className="kpi-label">Threats</div>
              </div>
            </div>
            <table className="mini-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>USER</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-muted-foreground">10:42</td>
                  <td>Dir. Hassan</td>
                  <td className="status-authorized">AUTH</td>
                </tr>
                <tr>
                  <td className="text-muted-foreground">10:38</td>
                  <td>Analyst K.</td>
                  <td className="status-authorized">AUTH</td>
                </tr>
                <tr>
                  <td className="text-muted-foreground">10:35</td>
                  <td>Guest_01</td>
                  <td className="status-blocked">BLOCK</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Hardware Demo Preview */}
        <div className="demo-preview group">
          <div className="demo-header">
            <div className="demo-dot bg-[#ff5f57]"></div>
            <div className="demo-dot bg-[#febc2e]"></div>
            <div className="demo-dot bg-[#28c840]"></div>
            <span className="text-[10px] text-muted-foreground ml-2 font-mono">
              EDGE_NODE_CTRL
            </span>
          </div>
          <div className="demo-content">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[9px] text-muted-foreground">
                GPU-0: NVIDIA A100
              </span>
              <span className="text-[9px] text-primary">ACTIVE</span>
            </div>
            <div className="server-rack mb-3">
              <div className="drive-bay" style={{ "--delay": "0s" } as any}></div>
              <div className="drive-bay" style={{ "--delay": "0.3s" } as any}></div>
              <div className="drive-bay" style={{ "--delay": "0.6s" } as any}></div>
              <div className="drive-bay" style={{ "--delay": "0.9s" } as any}></div>
              <div className="drive-bay" style={{ "--delay": "1.2s" } as any}></div>
              <div className="drive-bay" style={{ "--delay": "0.4s" } as any}></div>
              <div className="drive-bay" style={{ "--delay": "0.7s" } as any}></div>
              <div className="drive-bay" style={{ "--delay": "1s" } as any}></div>
            </div>
            <div className="mini-terminal">
              <div>&gt; nvidia-smi OK</div>
              <div>&gt; Model: Llama-3-70B-Q8</div>
              <div>&gt; VRAM: 78% utilized</div>
              <div className="opacity-50">&gt; Awaiting inference...</div>
            </div>
          </div>
        </div>

        {/* Ingestion Demo Preview */}
        <div className="demo-preview group">
          <div className="demo-header">
            <div className="demo-dot bg-[#ff5f57]"></div>
            <div className="demo-dot bg-[#febc2e]"></div>
            <div className="demo-dot bg-[#28c840]"></div>
            <span className="text-[10px] text-muted-foreground ml-2 font-mono">
              KNOWLEDGE_VAULT
            </span>
          </div>
          <div className="demo-content">
            <div className="text-[8px] text-muted-foreground mb-2">
              ENCRYPTED INDEX: 4.2 TB • AES-256
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-secondary/30 rounded border border-border/30">
                <span className="text-[8px]">📄 Policy_Annex_2024.pdf</span>
                <span className="ml-auto text-[7px] text-primary">
                  ✓ INDEXED
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-secondary/30 rounded border border-primary/40">
                <span className="text-[8px]">📄 Budget_Q3.xlsx</span>
                <div className="ml-auto flex-1 max-w-[60px] h-1.5 bg-secondary rounded overflow-hidden">
                  <div
                    className="h-full bg-primary"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-secondary/30 rounded border border-red-900/50">
                <span className="text-[8px]">📦 unknown.zip</span>
                <span className="ml-auto text-[7px] text-red-500">
                  ⚠ BLOCKED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Demo Preview */}
        <div className="demo-preview group">
          <div className="demo-header">
            <div className="demo-dot bg-[#ff5f57]"></div>
            <div className="demo-dot bg-[#febc2e]"></div>
            <div className="demo-dot bg-[#28c840]"></div>
            <span className="text-[10px] text-muted-foreground ml-2 font-mono">
              POLICY_PROTOCOL
            </span>
          </div>
          <div className="demo-content">
            <div className="text-[8px] text-muted-foreground mb-2 uppercase tracking-wider">
              Sovereign Guidelines
            </div>
            <div className="policy-toggle">
              <span>Data Retention Policy</span>
              <div className="toggle-switch"></div>
            </div>
            <div className="policy-toggle">
              <span>Procurement Secrecy</span>
              <div className="toggle-switch"></div>
            </div>
            <div className="policy-toggle">
              <span>External API Access</span>
              <div className="toggle-switch off"></div>
            </div>
            <div className="mt-3 p-2 bg-red-950/30 border border-red-900/50 rounded text-[8px] text-red-400">
              ⚠ VIOLATION BLOCKED: Policy constraint triggered
            </div>
          </div>
        </div>

        {/* System Status Preview */}
        <div className="demo-preview group">
          <div className="demo-header">
            <div className="demo-dot bg-[#ff5f57]"></div>
            <div className="demo-dot bg-[#febc2e]"></div>
            <div className="demo-dot bg-[#28c840]"></div>
            <span className="text-[10px] text-muted-foreground ml-2 font-mono">
              SYS_STATUS
            </span>
          </div>
          <div className="demo-content">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center">
                <div className="text-xl font-bold text-primary font-mono">
                  4ms
                </div>
                <div className="text-[8px] text-muted-foreground">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-foreground font-mono">
                  99.9%
                </div>
                <div className="text-[8px] text-muted-foreground">Uptime</div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-[9px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Auth Service</span>
                <span className="ml-auto text-primary">RUNNING</span>
              </div>
              <div className="flex items-center gap-2 text-[9px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Vector Store</span>
                <span className="ml-auto text-primary">RUNNING</span>
              </div>
              <div className="flex items-center gap-2 text-[9px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>LLM Inference</span>
                <span className="ml-auto text-primary">RUNNING</span>
              </div>
              <div className="flex items-center gap-2 text-[9px]">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>Audit Logger</span>
                <span className="ml-auto text-primary">RUNNING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
