<script lang="ts">
  import { fly } from "svelte/transition";
  export let langs: string = "";
  export let libs: string = "";

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<div>
  <h1 in:fly={{ y: -20, duration: 1000 }}>About Me</h1>
  <br /><br />
  <p in:fly={{ y: -20, duration: 750, delay: 300 }}>
    Hello! I'm Elias! I'm a {age} year old Programmer, and I make anything from Websites,
    to games to Discord bots. I've been programming since 11, starting off with web
    development with HTML and CSS. I've learned C# at 12 and got into game development
    using the Unity Game Engine. Nowadays, I use:<br />
    <span class="bold" style="font-weight: 600">Languages</span>:
    <u>{langs}</u>
    <br />
    <span class="bold" style="font-weight: 600">Frameworks/Libraries</span>:
    <u>{libs}</u>
  </p>
</div>

<style lang="scss">
  @import "src/scss/_mixins.scss";

  div {
    @include flex-center;
    flex-direction: column;
    h1 {
      font-weight: 300;
      font-size: 3rem;
    }
    p {
      text-align: justify;
      max-width: 60ch;
      margin: 0 5rem;
    }
  }
</style>
