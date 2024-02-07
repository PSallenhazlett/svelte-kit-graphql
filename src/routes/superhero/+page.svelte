<script>
    import "../../app.css"

    /** @type {import('./$types').PageData} */
    export let data;

    /** @type {import('$lib/models').Superhero[]} */
    let superheroes = data.superheroes;

    /** @type {String | undefined} **/
    let menuOpen = undefined
</script>

<div class="table-header">
    <h1>Superheroes</h1>
    
    <div class="table-buttons">
        <a href="/superhero/create"><button>Create</button></a>
    </div>
</div>

<ul class="divide-y divide-gray-100">
  {#each superheroes as superhero}
    <li class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{superhero.name}</p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{superhero.height}</p>
        </div>
      </div>
      <div class="hidden shrink-0 sm:flex sm:flex-row sm:items-end">
        <p class="text-sm leading-6 text-gray-900"></p>
        
        <button type="button" class="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" aria-expanded="false" on:click={() => {
          if (menuOpen == superhero.id) {
            menuOpen = undefined
          } else {
            menuOpen = superhero.id
          }
        }}>
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          </svg>
        </button>

        <div class="absolute z-10 flex -translate-x-1/2 translate-y-full px-4 {menuOpen && menuOpen == superhero.id ? "md:block" : "md:hidden"}">
          <div class="max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div class="p-1">
              <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div>
                  <a href="/superhero/{superhero.id}" class="font-semibold text-gray-900">
                    View
                  </a>
                </div>
              </div>
              
              <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div>
                  <a href="/superhero/{superhero.id}/edit" class="font-semibold text-gray-900">
                    Edit
                  </a>
                </div>
              </div>

              <div class="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                <div>
                  <a href="/superhero/{superhero.id}/delete" class="font-semibold text-gray-900">
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  {/each}
</ul>


<a class="nav nav-left" href="/">Go Back</a>