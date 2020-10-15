import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('enterNum changes running total', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });

  it('should be able to add numbers', () => {
    wrapper.vm.previousTotal = 4;
    wrapper.vm.add(1)
    expect(wrapper.vm.runningTotal).to.equal(5);
  });

  it('should be able to subtract numbers', () => {
    wrapper.vm.previousTotal = 7;
    wrapper.vm.subtract(4);
    expect(wrapper.vm.runningTotal).to.equal(3)
  });

  it('should be able to multiply numbers', () => {
    wrapper.vm.previousTotal = 3;
    wrapper.vm.multiply(5);
    expect(wrapper.vm.runningTotal).to.equal(15)
  });

  it('should be able to divide numbers', () => {
    wrapper.vm.previousTotal = 21;
    wrapper.vm.divide(3)
    expect(wrapper.vm.runningTotal).to.equal(7)
  });

  it('should be able to concatenate', () => {
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick(5);
    wrapper.vm.numberClick(5);
    expect(wrapper.vm.runningTotal).to.equal(55)
  });

  it('should be able to chain operations', () => {
    wrapper.vm.previousTotal = 0;
    wrapper.vm.numberClick(5);
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick(5);
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick(2);
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(20)
  });

  it('should be able to click clear without affecting calculation', () => {
    wrapper.previousTotal = 0;
    wrapper.vm.numberClick(5);
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0);                    // not sure best way to show this
  });

  
})
