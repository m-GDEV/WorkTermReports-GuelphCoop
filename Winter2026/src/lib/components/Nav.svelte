<script>
  let { activeSection } = $props();

  const navLinks = [
    { id: 'abstract',        label: 'Abstract'        },
    { id: 'employer',        label: 'Employer'        },
    { id: 'goals',           label: 'Goals'           },
    { id: 'job',             label: 'Job'             },
    { id: 'conclusions',     label: 'Conclusions'     },
    { id: 'acknowledgments', label: 'Acknowledgments' },
  ];

  let mobileOpen = $state(false);
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1e1e1e]">
  <div class="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">

    <!-- Brand -->
    <a href="#hero" class="font-mono text-sm shrink-0">
      <span class="text-zinc-600">~/</span><span class="text-zinc-300">musa</span><span class="text-orange-500">@</span><span class="text-zinc-300">camis</span>
    </a>

    <!-- Desktop links -->
    <ul class="hidden md:flex items-center gap-0.5">
      {#each navLinks as link}
        <li>
          <a
            href="#{link.id}"
            class="px-3 py-1.5 rounded font-mono text-xs transition-all duration-150
              {activeSection === link.id
                ? 'text-orange-500 bg-orange-500/10'
                : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50'}"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>

    <!-- Mobile toggle -->
    <button
      class="md:hidden p-2 text-zinc-500 hover:text-zinc-200 transition-colors"
      onclick={() => (mobileOpen = !mobileOpen)}
      aria-label="Toggle menu"
    >
      {#if mobileOpen}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      {:else}
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      {/if}
    </button>

  </div>

  <!-- Mobile dropdown -->
  {#if mobileOpen}
    <div class="md:hidden border-t border-[#1e1e1e]">
      <ul class="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-0.5">
        {#each navLinks as link}
          <li>
            <a
              href="#{link.id}"
              onclick={() => (mobileOpen = false)}
              class="flex items-center gap-2 px-3 py-2 rounded font-mono text-sm transition-colors
                {activeSection === link.id
                  ? 'text-orange-500 bg-orange-500/10'
                  : 'text-zinc-500 hover:text-zinc-200'}"
            >
              <span class="text-orange-500/40 text-xs">&gt;</span>
              {link.label}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</nav>
