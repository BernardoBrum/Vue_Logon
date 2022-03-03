import { shallowMount } from "@vue/test-utils";
import Clock from "@/components/clock/index.vue";

describe("Title component", () => {
  test("Teste 01", () => {
    const wrapper = shallowMount(Clock);

    expect(wrapper.contains('div')).toBe(true);
  });
});
