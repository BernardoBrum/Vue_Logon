import { shallowMount } from "@vue/test-utils";
import Title from "@/components/title/index.vue";

describe("Title component", () => {
  test("Teste 01", () => {
    const wrapper = shallowMount(Title);

    expect(wrapper.contains('h5')).toBe(true);
  });
});
