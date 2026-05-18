<script>
  import { GOALS } from '$lib/workterm_answers.js';

  const roman = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
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

    <div class="space-y-10">
      {#each GOALS as item, i}
        <div class="rounded-lg border border-[#1e1e1e] bg-[#111] overflow-hidden glow-box-hover">

          <div class="flex items-start gap-4 px-6 py-4 border-b border-[#1a1a1a]">
            <span class="font-mono text-orange-500/35 text-xs shrink-0 mt-0.5">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 class="font-mono text-sm font-semibold text-zinc-200 leading-snug">
              {item.question}
            </h3>
          </div>

          <div class="px-6 py-5">
            {#if item.goals}
              <ul class="space-y-2">
                {#each item.goals as goal, j}
                  <li class="flex items-start gap-3">
                    <span class="font-mono text-orange-500/50 text-xs shrink-0 mt-0.5">{roman[j]}</span>
                    <span class="text-zinc-300 text-sm leading-relaxed">{goal}</span>
                  </li>
                {/each}
              </ul>
            {:else if item.reflections}
              <ul class="space-y-4">
                {#each item.reflections as ref, j}
                  <li class="flex items-start gap-3">
                    <span class="font-mono text-orange-500/50 text-xs shrink-0 mt-0.5">{roman[j]}</span>
                    <p class="text-zinc-300 text-sm leading-relaxed">{ref}</p>
                  </li>
                {/each}
              </ul>
            {:else}
              {#each item.answer.split('\n\n') as para}
                <p class="text-zinc-300 text-sm leading-relaxed mb-3 last:mb-0">{para}</p>
              {/each}
            {/if}
          </div>

        </div>
      {/each}
    </div>

  </div>
</section>
