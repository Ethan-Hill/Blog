<template>
  <div class="px-8 py-12">
    <div class="m-auto max-w-7xl">
      <div>
        <h1 class="font-extrabold text-white text-8xl">Blog</h1>
      </div>
      <nuxt-link :to="{ name: 'slug', params: { slug: mainArticle.slug } }">
        <div class="flex flex-col p-4 my-16 lg:flex-row">
          <!-- <img
            class="block w-full max-w-3xl h-80"
            :src="require(`~/assets/resources/${mainArticle.img}`)"
            alt=""
          /> -->
          <div
            class="w-full max-w-3xl rounded-lg lg:w-3/4 bg-gradient-to-r h-80 from-MainB via-MainP to-MainY"
          />
          <div class="flex flex-col py-2 lg:px-8">
            <h2 class="mb-2 text-xl font-bold text-white">
              {{ mainArticle.date }}
            </h2>
            <h1
              class="mb-2 text-2xl lg:text-5xl font-bold lg:leading-[3.5rem] text-white "
            >
              {{ mainArticle.title }}
            </h1>
            <p class="text-lg text-gray-200 ">{{ mainArticle.description }}</p>
          </div>
        </div>
      </nuxt-link>
      <div class="flex flex-wrap w-full">
        <div
          class="mb-4 w-144 lg:w-1/2 lg:min-w-max"
          v-for="article of articles"
          :key="article.id"
        >
          <nuxt-link :to="{ name: 'slug', params: { slug: article.slug } }">
            <div class="flex flex-col p-4 my-16 lg:flex-row">
              <div
                class="w-full h-64 max-w-3xl rounded-lg lg:w-3/4 bg-gradient-to-r from-MainB via-MainP to-MainY"
              />
              <div class="flex flex-col py-2 lg:px-4">
                <h2 class="mb-2 text-xl font-bold text-white">
                  {{ article.date }}
                </h2>
                <h1
                  class="mb-2 text-3xl lg:text-5xl font-bold  lg:leading-[3.5rem] text-white "
                >
                  {{ article.title }}
                </h1>
                <p class="text-lg text-gray-200 ">{{ article.description }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("blog", params.slug)
      .only(["title", "description", "date", "img", "slug", "id"])
      .sortBy("id", "asc")
      .fetch();

    const mainArticle = articles.shift();

    return {
      articles,
      mainArticle
    };
  }
};
</script>
