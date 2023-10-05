<template>
  <footer
    class="fixed flex items-center justify-between w-full bottom-10 px-4 lg:px-6"
  >
    <div class="flex items-center gap-x-5">
      <div
        class="rounded bg-white flex items-center shrink-0 divide-x divide-gray-300 ring-[1px] ring-gray-300 w-fit"
      >
        <NavBarIconButton
          title="zoom out (ctrl + -)"
          name="ic:baseline-minus"
        />
        <div class="text-gray-500 text-xs px-2 py-3.5">100%</div>
        <NavBarIconButton
          title="zoom in (ctrl + +)"
          name="material-symbols:add"
        />
      </div>

      <div
        class="rounded bg-white flex items-center shrink-0 divide-x divide-gray-300 ring-[1px] ring-gray-300 w-fit"
      >
        <NavBarIconButton title="Undo" name="clarity:undo-line" />
        <NavBarIconButton title="Redo" name="clarity:redo-line" />
      </div>
    </div>
    <div
      class="rounded bg-white divide-gray-300 ring-[1px] ring-gray-300 w-fit"
    >
      <NavBarIconButton title="Help (?)" name="ph:question-bold" />
    </div>
  </footer>
</template>
