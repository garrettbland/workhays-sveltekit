<script context="module">
    export const prerender = true
</script>

<svelte:head>
    <title>Contact Us | Work Hays</title>
</svelte:head>

<section>
    <h1 class="text-3xl font-bold text-blue-500">Contact Us</h1>
    <p class="prose prose-lg mb-8">
        Have questions or comments? Please fill out the form below and
        we will be in touch as soon as we can.
    </p>
    <form
        name="contact"
        method="POST"
        action="/success"
        data-netlify="true"
    >
        <input type="hidden" name="form-name" value="contact" />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
            <input
                class=""
                name="first"
                placeholder="First Name"
                type="text"
            />
            <input
                class=""
                name="last"
                placeholder="Last Name"
                type="text"
            />
            <input
                class=""
                name="email"
                placeholder="Email"
                type="email"
            />
            <input
                class=""
                name="business"
                placeholder="Business (optional)"
                type="text"
            />
            <textarea
                rows="5"
                class="col-span-1 md:col-span-2"
                placeholder="Your Message"
            />
        </div>
        <div class="space-y-4">
            <button
                type="submit"
                class="bg-indigo-600 hover:bg-indigo-700 text-white rounded px-5 py-2 transition-all"
                >Submit</button
            >
        </div>
    </form>
</section>
