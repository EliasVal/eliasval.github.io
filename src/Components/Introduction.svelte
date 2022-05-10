<script lang="ts">
  export let langs: string = "";
  export let libs: string = "";

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<section>
  <h1>Introduction</h1>
  <p>
    Hello! I'm Elias! I'm a {age} year old Programmer, and I make anything from Websites,
    to games to Discord bots. I've been programming since 11, starting off with web
    development with HTML and CSS. I've learned C# at 12 and got into game development
    using the Unity Game Engine. Nowadays, I use:<br />
    Languages: {langs}
    <br />
    Frameworks/Libraries: {libs}
  </p>
</section>

<style lang="scss">
  section {
    position: relative;
    h1 {
      font-weight: 300;
    }
  }
</style>
