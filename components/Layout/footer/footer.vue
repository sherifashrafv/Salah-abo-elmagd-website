<script lang="ts" setup></script>
<template>
  <div>
    <CoreBaseContainer>
      <div class="tw-flex tw-items-center tw-justify-between">
        <NuxtLink to="/">
          <img src="~/assets/svg/_logo.svg" alt="salah-logo" />
        </NuxtLink>
        <!--###Links##### -->
        <div>
          <ul class="_footer_links menu expanded text-center SMN_effect-4">
            <li>
              <NuxtLink to="/about-us">
                <span data-hover="About us"> About us </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services">
                <span data-hover="Services">Services</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/clients">
                <span data-hover="Clients">Clients</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us">
                <span data-hover="Contact us">Contact us</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!--###END_Links##### -->
        <!-- ###Social##### -->
        <div class="tw-flex tw-items-center tw-gap-5">
          <div class="social_link">
            <Icon
              class="social_icon"
              size="20"
              name="teenyicons:twitter-solid"
            />
          </div>
          <div class="social_link">
            <Icon
              class="social_icon"
              size="20"
              color=""
              name="brandico:facebook"
            />
          </div>
          <div class="social_link">
            <Icon
              class="social_icon"
              size="20"
              color=""
              name="ph:instagram-logo"
            />
          </div>
          <div class="social_link">
            <Icon
              class="social_icon"
              size="20"
              color=""
              name="simple-icons:tiktok"
            />
          </div>
        </div>
        <!-- ###END_Social##### -->
      </div>
      <!-- copy_right -->
      <div
        class="tw-flex tw-items-center tw-justify-center tw-gap-5 tw-mt-5 tw-mb-7"
      >
        <div class="copy_right">
          <span>© Copyright 2024, All Rights Reserved by codebasetech</span>
        </div>
      </div>
      <!-- end_copy_right -->
    </CoreBaseContainer>
  </div>
</template>

<style lang="scss" scoped>
.social_link {
  @apply tw-cursor-pointer tw-relative tw-h-[50px] tw-flex tw-items-center tw-justify-center tw-w-[50px] tw-rounded-full;
  transition: 1s ease;
  &::before {
    content: "";
    transition: 1s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--nuxt-indicator);
    border-radius: 50%;
    transform: scale(0, 0);
    z-index: -1;
  }
  &:hover {
    &:before {
      transform: scale(1, 1);
    }
    :deep(.social_icon) {
      fill: var(--secondary) !important;
      path {
        fill: var(--secondary) !important;
      }
    }
  }
}
:deep(.social_icon) {
  fill: var(--primary);
  path {
    transition: fill 1.2s ease;
    fill: var(--primary);
  }
}
._footer_links {
  @apply tw-flex tw-items-center tw-gap-20 tw-justify-between tw-list-none;
  li {
    a {
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      overflow: hidden;
      span {
        padding: 10px 0;
        font-size: 18px;
        position: relative;
        color: #f4f4f5 !important;
        overflow: hidden;
      }
    }
  }
}
.copy_right {
  @apply tw-text-[#FFF8EE] tw-font-medium;
}
</style>
