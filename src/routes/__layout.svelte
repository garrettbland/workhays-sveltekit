<script>
    /**
     * Import tailwindcss so we can use globally
     * Each sublayout will inherit this unless a layout
     * reset is used
     */
    import '../tailwind.css'

    import Navbar from '$components/Navbar.svelte'
</script>

<Navbar />
<div class="container mx-auto px-4">
    <slot />
</div>
