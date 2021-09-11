<script>
    import { fade, fly } from 'svelte/transition'
    let menu_is_open = false
</script>

<div class="bg-gray-100">
    <div
        class="container mx-auto px-5 py-1 text-sm flex flex-row justify-end text-black divide-x divide-gray-200"
    >
        <a href="/" class="antialiased hover:underline px-4"
            >Employer Registration</a
        >
        <a href="/" class="antialiased hover:underline px-4"
            >Sign In</a
        >
    </div>
</div>

<nav
    class="sticky top-0 left-0 z-10 w-full border-b-2 border-gray-200 bg-white bg-opacity-60 backdrop-filter backdrop-blur-md"
>
    <div
        class="container mx-auto flex flex-row items-center justify-between px-5"
    >
        <div class="flex flex-row space-x-12">
            <a href="/" class="flex flex-row space-x-4 items-center">
                <img
                    class="w-8 h-8 rounded-full"
                    src="/images/work-hays-logo.svg"
                    alt="Work Hays Logo"
                />
                <p>Work Hays</p>
            </a>
            <div
                class="hidden md:flex flex-row items-center space-x-4 text-sm"
            >
                <a
                    href="/"
                    class="px-4 py-4 border-b-2 border-transparent hover:border-blue-400"
                    >Jobs</a
                >
                <a
                    href="/"
                    class="px-4 py-4 border-b-2 border-transparent hover:border-blue-400"
                    >Events</a
                >
                <a
                    href="/"
                    class="px-4 py-4 border-b-2 border-transparent hover:border-blue-400"
                    >Contact</a
                >
            </div>
        </div>
        <a
            href="/"
            class="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-5 py-2 hidden md:block text-sm transition-all"
            >Post Your Job</a
        >
        <button
            class="md:hidden py-3"
            on:click={() => (menu_is_open = true)}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    </div>
</nav>

<!-- Invisible Navbar Height Filler-->
<div class="h-14 invisible" />

{#if menu_is_open}
    <!-- Mobile Menu Overlay -->
    <div
        transition:fade={{ duration: 200 }}
        on:click={() => (menu_is_open = false)}
        class="fixed z-20 top-0 left-0 w-screen h-screen bg-black bg-opacity-70"
    />

    <!-- Mobile Close Button-->
    <button
        transition:fade={{ duration: 200 }}
        on:click={() => (menu_is_open = false)}
        class="fixed z-30 top-0 right-0 mt-3 mr-5 bg-white rounded-full shadow"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12 text-black p-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    </button>

    <!-- Mobile Menu -->
    <div
        transition:fly={{ x: -400, duration: 200 }}
        class="fixed z-30 top-0 left-0 w-full max-w-xs bg-white shadow h-screen overflow-y-scroll"
    >
        Menu
    </div>
{/if}
