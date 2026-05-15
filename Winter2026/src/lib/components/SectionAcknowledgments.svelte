<script>
  import { ACKNOWLEDGMENTS } from '$lib/workterm_answers.js';
</script>

<section id="acknowledgments" class="py-24 px-6 line-grid border-t border-[#1a1a1a]">
  <div class="max-w-5xl mx-auto">

    <div class="flex items-center gap-4 mb-12">
      <span class="font-mono text-[10px] font-semibold text-orange-500/50 select-none">06</span>
      <div class="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent"></div>
      <h2 class="font-mono text-xl md:text-2xl font-bold text-zinc-200">
        <span class="text-zinc-600">&gt;&nbsp;</span>acknowledgments
      </h2>
    </div>

    <div class="max-w-3xl mb-12">
      <p class="text-zinc-300 leading-relaxed">{ACKNOWLEDGMENTS.paragraph}</p>
    </div>

    {#if ACKNOWLEDGMENTS.people.length > 0}
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {#each ACKNOWLEDGMENTS.people as person}
          <div class="rounded border border-[#222] bg-[#111] p-4 space-y-1">
            <p class="font-mono text-zinc-200 text-sm font-medium">{person.name}</p>
            <p class="font-mono text-orange-500/55 text-xs">{person.role}</p>
            <p class="text-zinc-500 text-xs leading-relaxed pt-1">{person.note}</p>
          </div>
        {/each}
      </div>
    {/if}

  </div>
</section>
