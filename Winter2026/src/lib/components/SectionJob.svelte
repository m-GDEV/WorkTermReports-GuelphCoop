<script>
  import { JOB } from '$lib/workterm_answers.js';
</script>

<section id="job" class="py-24 px-6 line-grid">
  <div class="max-w-5xl mx-auto">

    <div class="flex items-center gap-4 mb-12">
      <span class="font-mono text-[10px] font-semibold text-orange-500/50 select-none">04</span>
      <div class="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent"></div>
      <h2 class="font-mono text-xl md:text-2xl font-bold text-zinc-200">
        <span class="text-zinc-600">&gt;&nbsp;</span>job description
      </h2>
    </div>

    <img
      src="/job.jpg"
      alt="Job Description"
      class="w-full h-auto rounded-lg border border-[#1e1e1e] mb-12 opacity-90"
    />

    <!-- Role meta -->
    <div class="glow-box rounded-lg border border-[#1e1e1e] bg-[#111] p-6 mb-12 font-mono text-sm">
      <div class="flex flex-wrap gap-8">
        <div>
          <p class="text-zinc-600 text-[10px] uppercase tracking-widest mb-1">role</p>
          <p class="text-orange-400">{JOB.title}</p>
        </div>
        <div>
          <p class="text-zinc-600 text-[10px] uppercase tracking-widest mb-1">team</p>
          <p class="text-zinc-300">{JOB.team}</p>
        </div>
        <div>
          <p class="text-zinc-600 text-[10px] uppercase tracking-widest mb-1">duration</p>
          <p class="text-zinc-300">Jan 2026 — Apr 2026</p>
        </div>
      </div>
    </div>

    <!-- Overview paragraphs -->
    <div class="max-w-3xl space-y-5 text-zinc-300 leading-relaxed mb-14">
      {#each JOB.overviewParagraphs as para}
        <p>{para}</p>
      {/each}
    </div>

    <!-- Skills used & learned -->
    <div class="mb-14">
      <h3 class="font-mono text-xs text-zinc-600 uppercase tracking-widest mb-6">
        <span class="text-orange-500/50">//</span> skills used &amp; learned
      </h3>
      <div class="space-y-4">
        {#each JOB.skillGroups as group}
          <div class="flex flex-wrap gap-x-6 gap-y-2 items-start">
            <span class="font-mono text-xs text-zinc-600 w-44 shrink-0 pt-1">{group.category}</span>
            <div class="flex flex-wrap gap-2">
              {#each group.skills as skill}
                <span class="font-mono text-xs px-2.5 py-1 rounded border border-[#2a2a2a] bg-[#0f0f0f] text-zinc-400">
                  {skill}
                </span>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>

  </div>
</section>
