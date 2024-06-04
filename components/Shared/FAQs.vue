<script lang="ts" setup>
interface SFaqs {
  id: number;
  question: string;
  answer: string;
}
const isCollapsed = ref([]);
function toggleCollapse(index: number) {
  isCollapsed.value[index] = !isCollapsed.value[index];
}
</script>
<template>
  <div class="faqs">
    <n-collapse :default-expanded-names="'1'" accordion arrow-placement="right">
      <n-collapse-item
        v-for="(item, i) in 5"
        :key="i"
        :name="`${i + 1}`"
        title="How to generate personalized campaigns with lemlist AI?"
        class="tw-bg-primaryBg tw-rounded-xl"
        @item-header-click="toggleCollapse(i)"
      >
        <template #arrow>
          <Icon
            v-if="!isCollapsed[i]"
            class="tw-text-primary"
            name="ic:outline-plus"
          />
          <Icon v-else name="ic:outline-minus" />
        </template>
        <div
          class="tw-px-6 tw-pb-5 tw-text-primary tw-text-[18px] tw-leading-[30px] tw-break-words tw-opacity-50"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          dolores, maiores unde rerum provident dolore voluptatem voluptatibus
          illo voluptatum! Ipsum, est sit vitae natus ut totam sapiente numquam
          excepturi maiores?
        </div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>

<style lang="scss">
.faqs {
  @apply tw-pb-36;
  .n-collapse-item {
    padding-block: 10px;
  }

  .n-collapse-item--active {
    box-shadow: 0 0 0 2px #000 !important;

    .n-collapse-item-arrow {
      svg {
        fill: var(--secondary) !important;
        color: var(--secondary) !important;
      }
      background-color: var(--primary);
    }
  }

  .n-collapse-item__header {
    padding: 0 !important;
  }

  .n-collapse-item__header-main {
    padding: 1.1rem 1.5rem;
    font-weight: 400 !important;
    font-size: 18px !important;
    justify-content: space-between;

    .n-collapse-item-arrow {
      box-shadow: 0 1px 8px 0 rgb(0 0 0 / 10%);
      border-radius: 30rem;
      padding: 4px;
      font-size: 18px !important;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .n-collapse-item__content-inner {
    padding-top: 0 !important;
  }
  .n-collapse .n-collapse-item:not(:first-child) {
    border: transparent !important;
  }
}
.n-collapse-item__header-main {
  color: var(--primary) !important;
}
.n-collapse-item__header.n-collapse-item__header--active {
}
</style>
