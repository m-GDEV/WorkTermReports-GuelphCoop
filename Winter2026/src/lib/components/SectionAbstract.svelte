<script>
  import { ABSTRACT } from '$lib/workterm_answers.js';
</script>

<section id="abstract" class="py-24 px-6">
  <div class="max-w-5xl mx-auto">

    <div class="flex items-center gap-4 mb-12">
      <span class="font-mono text-[10px] font-semibold text-orange-500/50 select-none">01</span>
      <div class="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent"></div>
      <h2 class="font-mono text-xl md:text-2xl font-bold text-zinc-200">
        <span class="text-zinc-600">&gt;&nbsp;</span>abstract
      </h2>
    </div>

    <img
      src="/abstract.png"
      alt="Abstract"
      class="w-full h-auto rounded-lg border border-[#1e1e1e] mb-12 opacity-90"
    />

    <div class="max-w-3xl space-y-5 text-zinc-300 leading-relaxed text-base">
      {#each ABSTRACT.paragraphs as para}
        <p>{para}</p>
      {/each}
    </div>

  </div>
</section>
