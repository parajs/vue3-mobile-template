<template>
  <Suspense>
    <template #default>
        <router-view v-slot="{ Component, route }">
            <keep-alive>
                <component
                    v-if="route.meta && route.meta.keepAlive"
                    :is="Component"
                    :key="route.meta.usePathKey ? route.path : undefined"
                />
            </keep-alive>
            <component
                v-if="!(route.meta && route.meta.keepAlive)"
                :is="Component"
            />
        </router-view>
    </template>
    <template #fallback> Loading... </template>
 </Suspense>
</template>
