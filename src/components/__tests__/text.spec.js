import { shallowMount } from "@vue/test-utils";
import Text from "@/components/text/index.vue";

describe("Text component", () => {
  test("Teste 01", () => {
    const wrapper = shallowMount(Text);

    expect(wrapper.contains('p')).toBe(true);
  });
});
