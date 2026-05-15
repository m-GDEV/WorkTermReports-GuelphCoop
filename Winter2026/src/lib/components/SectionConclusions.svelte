<script>
  import { CONCLUSIONS } from '$lib/workterm_answers.js';
</script>

<section id="conclusions" class="py-24 px-6">
  <div class="max-w-5xl mx-auto">

    <div class="flex items-center gap-4 mb-12">
      <span class="font-mono text-[10px] font-semibold text-orange-500/50 select-none">05</span>
      <div class="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent"></div>
      <h2 class="font-mono text-xl md:text-2xl font-bold text-zinc-200">
        <span class="text-zinc-600">&gt;&nbsp;</span>conclusions
      </h2>
    </div>

    <div class="max-w-3xl space-y-5 text-zinc-300 leading-relaxed">
      {#each CONCLUSIONS.paragraphs as para}
        <p>{para}</p>
      {/each}
    </div>

    <!-- Decorative terminal closing -->
    <div class="mt-20 font-mono text-sm select-none">
      <p class="text-zinc-700">
        <span class="text-green-500/30">musa@camis</span><span class="text-zinc-800">:</span><span class="text-blue-400/20">~</span><span class="text-zinc-800">$ </span><span class="text-zinc-700">echo "— fin —"</span>
      </p>
      <p class="text-zinc-700 mt-0.5 ml-4">— fin —</p>
    </div>

  </div>
</section>
