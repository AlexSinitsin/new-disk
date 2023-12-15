<template>
  <div class="main-page">
    <div class="left-box">
      <h1>Мои заметки</h1>
      <p>Не забывай о важном, храни его в облаке.</p>
    </div>
    <div class="right-box">
      <img src="../assets/main-img.svg" alt="img" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  components: {},
};
</script>

<style>
.main-page {
  display: flex;
}
.main-page .left-box {
  width: 642px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
.main-page .left-box h1 {
  color: #fff;
  font-family: Montserrat;
  font-size: 104px;
  font-style: normal;
  font-weight: 900;
  line-height: 104px;
  width: 488px;
  margin: 0px;
  margin-bottom: 40px;
  text-align: left;
}
.main-page .left-box p {
  color: #9da5af;
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  width: 394px;
  margin: 0px;
  text-align: left;
}
@media (min-width: 1205px) and (max-width: 1600px) {
  .right-box img {
    width: 627px;
  }
}
@media (min-width: 768px) and (max-width: 1205px) {
  .main-page {
    flex-flow: column wrap;
    align-items: center;
    padding-top: 40px;
  }
  .right-box img {
    width: 560px;
  }
  .main-page .left-box {
    width: 688px;
    align-items: center;
  }
  .main-page .left-box h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  .main-page .left-box p {
    text-align: center;
  }
}
@media (min-width: 360px) and (max-width: 767px) {
  .main-page {
    flex-flow: column wrap;
    align-items: center;
    padding-top: 20px;
  }
  .right-box img {
    width: 299px;
  }
  .main-page .left-box {
    width: 320px;
    align-items: center;
  }
  .main-page .left-box h1 {
    width: auto;
    text-align: center;
    margin-bottom: 20px;

    font-family: Montserrat;
    font-size: 60px;
    font-style: normal;
    font-weight: 900;
    line-height: 64px;
  }
  .main-page .left-box p {
    width: auto;
    text-align: center;
    font-family: Montserrat;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
  }
}
</style>
