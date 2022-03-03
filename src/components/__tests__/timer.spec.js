import { shallowMount } from "@vue/test-utils";
import Timer from "@/components/timer/index.vue";

describe("Title component", () => {
  test("Teste 01", () => {
    const wrapper = shallowMount(Timer);

    expect(wrapper.contains('div')).toBe(true);
  });
});
