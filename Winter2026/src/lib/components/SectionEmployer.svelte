<script>
  import { EMPLOYER } from '$lib/workterm_answers.js';
</script>

<section id="employer" class="py-24 px-6 line-grid">
  <div class="max-w-5xl mx-auto">

    <div class="flex items-center gap-4 mb-12">
      <span class="font-mono text-[10px] font-semibold text-orange-500/50 select-none">02</span>
      <div class="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent"></div>
      <h2 class="font-mono text-xl md:text-2xl font-bold text-zinc-200">
        <span class="text-zinc-600">&gt;&nbsp;</span>employer
      </h2>
    </div>

    <img
      src="/company.jpg"
      alt="CAMIS"
      class="w-full h-auto rounded-lg border border-[#1e1e1e] mb-12 opacity-90"
    />

    <!-- Company header card -->
    <div class="glow-box glow-box-hover rounded-lg border border-[#1e1e1e] bg-[#111] p-7 mb-8">
      <h3 class="font-mono text-3xl md:text-4xl font-bold text-white mb-2">CAMIS</h3>
      <p class="font-mono text-orange-500/60 text-sm mb-6">{EMPLOYER.tagline}</p>
      <div class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
        {#each EMPLOYER.quickFacts as fact}
          <span>
            <span class="text-orange-500/50">{fact.key}&nbsp;</span>
            <span class="text-zinc-400">{fact.value}</span>
          </span>
        {/each}
      </div>
    </div>


    <!-- Description paragraphs -->
    <div class="max-w-3xl space-y-5 text-zinc-300 leading-relaxed mb-12">
      {#each EMPLOYER.descriptionParagraphs as para}
        <p>{para}</p>
      {/each}
    </div>

    <!-- Interesting facts grid -->
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {#each EMPLOYER.interestingFacts as item, i}
        <div class="rounded border border-[#222] bg-[#111] p-4">
          <p class="font-mono text-orange-500/50 text-[10px] mb-1 uppercase tracking-widest">
            {item.label} {String(i + 1).padStart(2, '0')}
          </p>
          <p class="text-zinc-400 text-sm leading-relaxed">{item.value}</p>
        </div>
      {/each}
    </div>

  </div>
</section>
