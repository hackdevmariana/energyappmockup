<!--
USAGE:

<ArticleFeedback
  heading="¿Te ha sido útil este artículo?"
  yesLabel="Sí"
  noLabel="No"
/>

-->

<template>
  <div class="article-feedback-container">
    <div class="article-feedback-heading">{{ heading }}</div>
    <div class="article-feedback-wrapper">
      <input
        class="input"
        :id="yesId"
        value="yes"
        name="article"
        type="radio"
      />
      <label class="article-feedback" :for="yesId">{{ yesLabel }}</label>

      <input class="input" :id="noId" value="no" name="article" type="radio" />
      <label class="article-feedback" :for="noId">{{ noLabel }}</label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: String,
    default: "UIverse is helpful?",
  },
  yesLabel: {
    type: String,
    default: "Yes",
  },
  noLabel: {
    type: String,
    default: "No",
  },
});

const yesId = "yes-" + Math.random().toString(36).substr(2, 9);
const noId = "no-" + Math.random().toString(36).substr(2, 9);
</script>

<style scoped>
.article-feedback-container {
  --hover: #494b4f;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
}
.article-feedback-heading {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-color);
}
.article-feedback-wrapper {
  display: flex;
  align-items: center;
}
.article-feedback-wrapper .input {
  display: none;
}
.article-feedback {
  flex-grow: 1;
  text-align: center;
  padding: 8px 24px;
  font-size: 14px;
  background: var(--text-color);
  border: 1px solid var(--primary-color);
  color: var(--secondary-color);
  font-weight: 500;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
.article-feedback-wrapper > .article-feedback:nth-child(2) {
  border-radius: 4px 0px 0px 4px;
}
.article-feedback-wrapper > .article-feedback:nth-child(4) {
  border-radius: 0px 4px 4px 0px;
}
.article-feedback:hover {
  background: var(--hover);
  color: var(--text-color);
  border-color: var(--hover);
}
.article-feedback:active {
  transform: scale(0.9);
}
.input:checked + label.article-feedback {
  background: var(--primary-color);
  color: var(--text-color);
}
</style>
