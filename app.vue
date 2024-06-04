<script lang="ts" setup>
import { NConfigProvider, NNotificationProvider } from "naive-ui";
import useLightTheme from "~/composables/core/useLightTheme.ts";
import useDarkTheme from "~/composables/core/useDarkTheme.ts";
const { lightThemeOverrides } = useLightTheme();
const { darkThemeOverrides } = useDarkTheme();
const colorMode = useColorMode();
const { enabled, toggleTheme } = useTheme();
useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.removeAttribute("data-theme")
    }`,
    },
  ],
});
</script>

<template>
  <Transition name="page">
    <n-config-provider
      :theme-overrides="
        $colorMode.value === 'dark' ? darkThemeOverrides : lightThemeOverrides
      "
    >
      <client-only>
        <n-notification-provider>
          <NuxtLoadingIndicator :height="3" />
          <nuxtLayout>
            <div>
              <NuxtPage />
            </div>
          </nuxtLayout>
        </n-notification-provider>
      </client-only>
    </n-config-provider>
  </Transition>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateX(-5px);
}
</style>
