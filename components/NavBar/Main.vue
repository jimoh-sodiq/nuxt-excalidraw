<script setup lang="ts">
const items = [
  [
    {
      label: "Export image",
      icon: "ic:baseline-photo",
      shortcuts: ["Ctrl+shift+e"],
      slot: "control",
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Reset the canvas",
      icon: "i-heroicons-pencil-square-20-solid",
      shortcuts: ["Ctrl+r"],
      slot: "control",
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Github",
      icon: "tdesign:logo-github-filled",
      slot: "control",
      click: () => {
        console.log("Edit");
      },
    },
    {
      label: "Help",
      icon: "ph:question-bold",
      shortcuts: ["?"],
      slot: "control",
      click: () => {
        console.log("Edit");
      },
    },
  ],
  [
    {
      label: "Canvas background",
      slot: "control",
      click: () => {
        console.log("Edit");
      },
    },
  ],
];
</script>

<template>
  <nav
    class="flex fixed top-5 left-0 px-4 lg:px-6 w-full items-center justify-between gap-x-2 text-[#afaead] text-xs"
  >
    <UDropdown
      :items="items"
      h-full
      :popper="{ placement: 'bottom-start' }"
      :ui="{
        background: 'bg-white dark:bg-white',
        ring: 'ring-1 ring-gray-200 dark:ring-gray-200',
        item: {
          size: 'text-sm',
          active:
            'bg-white dark:bg-white hover:bg-gray-900 dark:hover:bg-gray-200',
          inactive: 'text-gray-700 dark:text-gray-200',
        },
      }"
    >
      <UButton
        icon="i-heroicons-bars-3"
        size="sm"
        color="white"
        class="bg-white dark:bg-white"
        square
        variant="outline"
      />
      <template #control="{ item }">
        <button
          class="text-gray-600 select-none dark:text-gray-600 text-[11px] flex items-center w-full justify-between gap-x-3"
        >
          <div class="inline-flex items-center gap-x-2.5">
            <Icon v-if="item.icon" size="18px" :name="item.icon" />
            <p class="inline-block">{{ item.label }}</p>
          </div>
          <span v-if="item.shortcuts" class="inline-block text-gray-400">{{
            item.shortcuts[0]
          }}</span>
        </button>
      </template>
    </UDropdown>
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
</template>
