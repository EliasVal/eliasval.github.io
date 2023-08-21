<script lang="ts">
  import { cubicOut, cubicInOut } from 'svelte/easing';
  import { fly, fade, slide } from 'svelte/transition';
  import GradientText from '../GradientText.svelte';
  import ContentBox from '../ContentBox.svelte';
</script>

<div id="workvalues">
  <div class="header">
    <div
      in:fly={{ x: -150, duration: 850, delay: 100, easing: cubicOut, opacity: 0.00001 }}
      class="title"
    >
      <GradientText rgbValues={['mediumpurple 50%', 'aquamarine']} direction={'145deg'}>
        Work Values
      </GradientText>
    </div>
  </div>
  <div class="content">
    <ul in:fade={{ duration: 250, delay: 100, easing: cubicInOut }}>
      <ContentBox>
        <li
          style="margin-bottom: 1rem;"
          in:slide={{ duration: 500, delay: 250, easing: cubicInOut }}
        >
          <b>
            <GradientText rgbValues={['#F00F0F', '#F9F9F9']} direction={'to top right'}>
              Performance
            </GradientText>
          </b>: whether it is a website or a game, I strive to make my programs perform as best as I
          can.
        </li>

        <li
          style="padding: 1rem 0; border-top: 1px dashed #fff; border-bottom: 1px dashed #fff"
          in:slide={{ duration: 500, delay: 450, easing: cubicInOut }}
        >
          <b>
            <GradientText rgbValues={['#0FF00F 50%', '#F9F9F9']} direction={'to top right'}>
              SEO & Accessibility
            </GradientText>
          </b>: I strive to achieve a perfect scoring in
          <a href="https://web.dev/measure/">Google's lighthouse</a> tool in the SEO and Accessibility
          criteria which achieves a higher ranking in search engines such as Google and Bing, and allow
          people with certain impairments to use the website, which they could not otherwise.
        </li>

        <li style="margin-top: 1rem;" in:slide={{ duration: 500, delay: 650, easing: cubicInOut }}>
          <b>
            <GradientText rgbValues={['#0FF0F0', '#F9F9F9']} direction={'to top right'}>
              Design
            </GradientText>
          </b>: I come up with unique designs for every website and game I make so that every
          product will feel like an entirely unique experience, such as this one. The designs may be
          simplistic, but they deliever precisely what they need to.
        </li>
      </ContentBox>
      <br />
    </ul>
    <span in:fade={{ duration: 1750, delay: 1000, easing: cubicInOut }}>
      <ContentBox
        sub={true}
        title="- Albert Einstein, 1933&nbsp;"
        titleStyle={{
          fontSize: '1.15rem',
          fontStyle: 'italic',
          textAlign: 'right',
          marginTop: '0.25rem'
        }}
        containerStyle={{ width: '100%', textAlign: 'left', paddingBottom: '0.35rem' }}
        contentStyle={{ fontSize: '1.25rem' }}
      >
        &ldquo; Everything should be made as simple as possible, but no simpler &rdquo;
      </ContentBox>
    </span>
  </div>
</div>

<style lang="scss">
  #workvalues {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 2rem);

    .header {
      position: absolute;
      top: 0;
      left: 0;
      margin: 2em 3em;
      .title {
        font-size: 4em;
        font-weight: 600;
      }
    }

    .content {
      max-width: 60ch;
      width: 75%;
      margin: 0 auto;
      > ul {
        text-align: justify;
        list-style: none;
        li b {
          display: inline-block;
        }
      }
    }
  }

  @media screen and (max-width: 780px) {
    #workvalues {
      display: block;
      .header {
        margin: 2rem 0 1rem 0;
        position: relative;
        width: 100%;
        .title {
          font-size: 3.5rem;
          text-align: center;
        }
      }
    }
  }
</style>
