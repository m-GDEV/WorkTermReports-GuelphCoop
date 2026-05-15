<script>
  import { GOALS, GOALS_INTRO } from '$lib/workterm_answers.js';
</script>

<section id="goals" class="py-24 px-6">
  <div class="max-w-5xl mx-auto">

    <div class="flex items-center gap-4 mb-12">
      <span class="font-mono text-[10px] font-semibold text-orange-500/50 select-none">03</span>
      <div class="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent"></div>
      <h2 class="font-mono text-xl md:text-2xl font-bold text-zinc-200">
        <span class="text-zinc-600">&gt;&nbsp;</span>goals
      </h2>
    </div>

    {#if GOALS_INTRO}
      <div class="max-w-3xl mb-12">
        <p class="text-zinc-300 leading-relaxed">{GOALS_INTRO}</p>
      </div>
    {/if}

    <div class="space-y-5">
      {#each GOALS as goal}
        <div class="rounded-lg border border-[#1e1e1e] bg-[#111] overflow-hidden glow-box-hover">

          <!-- Card header -->
          <div class="flex items-center gap-4 px-6 py-4 border-b border-[#1a1a1a]">
            <span class="font-mono text-orange-500/35 text-xs shrink-0">{goal.n}</span>
            <h3 class="font-mono text-sm font-semibold text-zinc-200">{goal.title}</h3>
          </div>

          <!-- Card body -->
          <div class="px-6 py-5 space-y-5">

            <div>
              <p class="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-1.5">goal</p>
              <p class="text-zinc-300 text-sm leading-relaxed">{goal.goal}</p>
            </div>

            <div>
              <p class="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-1.5">action plan</p>
              <p class="text-zinc-400 text-sm leading-relaxed">{goal.actionPlan}</p>
            </div>

            <div>
              <p class="font-mono text-[10px] uppercase tracking-widest text-zinc-600 mb-1.5">measure of success</p>
              <p class="text-zinc-400 text-sm leading-relaxed">{goal.measureOfSuccess}</p>
            </div>

            <div class="pt-4 border-t border-[#181818]">
              <p class="font-mono text-[10px] text-zinc-600 mb-1.5">// reflection</p>
              <p class="text-zinc-500 text-sm italic leading-relaxed">{goal.reflection}</p>
            </div>

          </div>
        </div>
      {/each}
    </div>

  </div>
</section>
