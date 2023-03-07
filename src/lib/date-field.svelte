<script>
    /** @type Date */
    export let value;

    /**
     * @param {Date} date
     */
    function getFormattedDate(date) {
        if (typeof(date) == "string") {
            date = new Date(date);
        }

        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        var monthStr = month.toString();
        var dayStr = day.toString();

        if (month < 10) {
            monthStr = `0${monthStr}`;
        }
        
        if (day < 10) {
            dayStr = `0${dayStr}`;
        }

        return `${year}-${monthStr}-${dayStr}`;
    }

    function dateChanged() {
        let offset = new Date().getTimezoneOffset();
        let offsetDate = new Date(field.value + "UTC-" + (offset/60));

        value = offsetDate;
    }

    /** @type any */
    let field;

    /** @type string */
    $: formattedValue = getFormattedDate(value);
</script>

<input type="date" value={formattedValue} on:change={dateChanged} bind:this={field} />