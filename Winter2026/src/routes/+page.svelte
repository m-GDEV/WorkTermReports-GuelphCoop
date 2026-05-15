<script>
  import { browser } from '$app/environment';
  import Nav from '$lib/components/Nav.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import SectionAbstract from '$lib/components/SectionAbstract.svelte';
  import SectionEmployer from '$lib/components/SectionEmployer.svelte';
  import SectionGoals from '$lib/components/SectionGoals.svelte';
  import SectionJob from '$lib/components/SectionJob.svelte';
  import SectionConclusions from '$lib/components/SectionConclusions.svelte';
  import SectionAcknowledgments from '$lib/components/SectionAcknowledgments.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let activeSection = $state('hero');

  $effect(() => {
    if (!browser) return;

    const sectionEls = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        }
      },
      // Fires when a section enters the middle band of the viewport
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    for (const el of sectionEls) observer.observe(el);
    return () => observer.disconnect();
  });
</script>

<svelte:head>
  <title>Musa Ahmed — Winter 2026 Work Term Report</title>
</svelte:head>

<Nav {activeSection} />

<main>
  <Hero />
  <SectionAbstract />
  <SectionEmployer />
  <SectionGoals />
  <SectionJob />
  <SectionConclusions />
  <SectionAcknowledgments />
</main>

<Footer />
