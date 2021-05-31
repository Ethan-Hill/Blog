<template>
  <article
    class="block max-w-3xl px-8 py-12 m-auto prose-sm prose text-white sm:prose lg:prose-lg xl:prose-2xl"
  >
    <h1>{{ article.title }}</h1>

    <div class="flex items-center w-64 ">
      <div class="w-16 mr-3 lg:w-24">
        <img src="~assets/Me.jpg" alt="Author" class="rounded-full" />
      </div>
      <div class="flex flex-col">
        <h5 class="font-bold">Ethan Hill</h5>
        <h6 class="font-medium">{{ article.date }}</h6>
      </div>
    </div>
    <nuxt-content class="mx-auto text-white " :document="article" />
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: this.article.title,
          name: this.article.title,
          content: this.article.description
        }
      ]
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();

    return { article };
  }
};
</script>

<style>
h1 {
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 30px;
}
</style>
