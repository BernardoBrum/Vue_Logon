import { shallowMount } from "@vue/test-utils";
import Input from "@/components/input/index.vue";

describe("Input component", () => {
  test("Teste 01", () => {
    const wrapper = shallowMount(Input);

    expect(wrapper.contains('div')).toBe(true);
  });
});
