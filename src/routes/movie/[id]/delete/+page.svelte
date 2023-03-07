<script>
    import DeleteModal from '$lib/delete-modal.svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    $: id = data.id;
</script>

<DeleteModal id={id} 
             redirectTo="/movie" 
             formId="deleteMovieForm"
             model="movie"
></DeleteModal>