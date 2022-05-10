<script lang="ts">
  export let langs: string = "";
  export let libs: string = "";

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<section>
  <div>
    <h1>Introduction</h1>
    <br /><br />
    <p>
      Hello! I'm Elias! I'm a {age} year old Programmer, and I make anything from
      Websites, to games to Discord bots. I've been programming since 11, starting
      off with web development with HTML and CSS. I've learned C# at 12 and got into
      game development using the Unity Game Engine. Nowadays, I use:<br />
      <span style="font-weight: 600">Languages</span>: <u>{langs}</u>
      <br />
      <span style="font-weight: 600">Frameworks/Libraries</span>: <u>{libs}</u>
    </p>
  </div>
</section>

<style lang="scss">
  section {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
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
  }

  // @media screen and (max-width: 1200px) {
  //   p {
  //     mar
  //   }
  // }
</style>
