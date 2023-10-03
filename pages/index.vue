<script setup lang="ts">
import { useRefHistory } from "@vueuse/core";

// next features:
// build the popover for the hamburger
// implement the canvas background color change
// implement the help modal
// 

const newData = ref("");
const { redo, undo } = useRefHistory(newData);
</script>

<template>
  <div class="mx-auto px-4 lg:px-6 py-4 relative h-full">
    <nav class="flex items-center justify-between gap-x-2 text-[#afaead] text-xs">
      <UButton
        icon="i-heroicons-bars-3"
        size="sm"
        color="gray"
        square
        variant="outline"
      />
      <div class="bg-white rounded-xl p-1.5 text-gray-600 shadow space-x-2">
        <NavBarIconButton
          title="Hand(pannning tool) - H"
          name="ic:outline-back-hand"
        />
        <NavBarIconButton index="1" name="mdi:cursor-default-outline" />
        <NavBarIconButton index="2" name="ic:baseline-crop-square" />
        <NavBarIconButton index="3" name="ph:diamond-bold" />
        <NavBarIconButton index="4" name="ic:outline-circle" />
        <NavBarIconButton index="5" name="ic:baseline-arrow-right-alt" />
        <NavBarIconButton index="6" name="ic:baseline-horizontal-rule" />
        <NavBarIconButton index="7" name="ic:baseline-mode-edit-outline" />
        <NavBarIconButton index="8" name="ic:baseline-format-color-text" />
        <NavBarIconButton index="9" name="ic:baseline-photo" />
        <NavBarIconButton index="0" name="ic:round-cleaning-services" />
      </div>

      <NuxtLink
        target="_blank"
        to="https://github.com/jimoh-sodiq"
        class="bg-white rounded shadow ring-[1px] ring-gray-200"
      >
        <NavBarIconButton title="Github" name="tdesign:logo-github-filled" />
      </NuxtLink>
    </nav>

    <div class="fixed bottom-10 flex items-center gap-x-5">
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
      class="fixed right-5 bottom-10 rounded bg-white divide-gray-300 ring-[1px] ring-gray-300 w-fit"
    >
      <NavBarIconButton title="Help (?)" name="ph:question-bold" />
    </div>
  </div>
</template>
