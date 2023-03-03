<script>
    import { goto } from '$app/navigation';

    /** @type string */
    export let id;
    
    /** @type string */
    export let redirectTo = "/";
    
    /** @type string */
    export let formId = "deleteForm";

    /** @type string */
    export let model = "object";

    /**
     * @param {any} event
     */
    function goBack(event) {
        event.preventDefault();
        goto(redirectTo);
    }
</script>

<style>
    .button-container {
        margin-top: 0.5rem;
        display: flex;
        flex-direction: row;
    }

    .yes-button {
        margin-left: auto;
    }
</style>

<form id={formId} method="POST">
    <div class="modal-text">
        Are you sure you want to delete this {model}?
    </div>
    
    <div class="button-container">
        <button on:click={goBack}>No</button>
        <button class="yes-button">Yes</button>
    </div>

    <input type="hidden" value={id} name="id" />
</form>