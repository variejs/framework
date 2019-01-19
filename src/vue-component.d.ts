import Vue from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    $inject?: Array<string>;
  }
}
