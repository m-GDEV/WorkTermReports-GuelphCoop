<section id="hero" class="min-h-screen flex flex-col justify-center px-6 pt-14 dot-grid relative overflow-hidden">

  <!-- Bottom fade to bg -->
  <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none"></div>

  <!-- Ambient glow blob -->
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange-500/[0.025] rounded-full blur-3xl pointer-events-none"></div>

  <div class="max-w-5xl mx-auto w-full relative z-10">
    <div class="flex flex-col md:flex-row items-center gap-10 md:gap-16">

      <!-- Left: text content -->
      <div class="flex-1 min-w-0">

        <!-- Terminal prompt line -->
        <p class="font-mono text-sm text-zinc-600 mb-8 animate-fade-in-up" style="animation-delay: 0.05s">
          <span class="text-green-500/70">musa@camis</span><span class="text-zinc-700">:</span><span class="text-blue-400/60">~/work-term-reports/winter-2026</span><span class="text-zinc-700">$</span>
          <span class="ml-2 text-zinc-600">open report.md</span>
        </p>

        <!-- Main title -->
        <h1 class="font-mono font-bold leading-none mb-8 animate-fade-in-up" style="animation-delay: 0.15s">
          <span class="block text-zinc-600 text-lg md:text-xl mb-3">&gt;&nbsp;Work Term Report</span>
          <span class="block text-white  text-5xl md:text-6xl lg:text-7xl tracking-tight">Winter</span>
          <span class="block text-orange-500 text-5xl md:text-6xl lg:text-7xl tracking-tight glow-text">
            2026<span class="animate-blink">_</span>
          </span>
        </h1>

        <!-- Byline -->
        <div class="mb-10 animate-fade-in-up" style="animation-delay: 0.3s">
          <p class="font-mono text-zinc-400 text-base md:text-lg">
            Musa Ahmed &nbsp;·&nbsp; <span class="text-orange-400">CAMIS</span>
          </p>
          <p class="font-mono text-zinc-600 text-sm mt-1">
            <span class="text-zinc-700">/*</span> January 2026 – April 2026 <span class="text-zinc-700">*/</span>
          </p>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2 mb-12 animate-fade-in-up" style="animation-delay: 0.45s">
          {#each ['ai-agents', 'claude-code', 'software-dev', 'camis', 'winter-2026'] as tag}
            <span class="font-mono text-xs px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 text-orange-400/75">
              #{tag}
            </span>
          {/each}
        </div>

        <!-- Scroll hint -->
        <p class="font-mono text-xs text-zinc-700 animate-fade-in-up" style="animation-delay: 0.6s">
          scroll to read &nbsp;<span class="text-orange-500/30">▼</span>
        </p>

      </div>

      <!-- Right: hero image (~1/3 width) -->
      <!-- STUB: Drop your image into static/ and update the src below.
           Recommended: static/hero.jpg or static/hero.png -->
      <div class="w-full md:w-72 lg:w-80 shrink-0 animate-fade-in-up" style="animation-delay: 0.25s">
        <img
          src="/hero.svg"
          alt="Musa Ahmed"
          class="w-full max-h-72 md:max-h-80 object-cover rounded-lg border border-[#1e1e1e] opacity-80"
        />
      </div>

    </div>
  </div>

</section>
