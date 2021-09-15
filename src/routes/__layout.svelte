<script>
    /**
     * Import tailwindcss so we can use globally
     * Each sublayout will inherit this unless a layout
     * reset is used
     */
    import '../tailwind.css'

    import Navbar from '$components/Navbar.svelte'
    import Footer from '$components/Footer.svelte'
</script>

<Navbar />
<div class="max-w-4xl mx-auto px-4 pb-14">
    <slot />
</div>
<Footer />
