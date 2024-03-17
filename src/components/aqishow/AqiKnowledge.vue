<template>
  <div class="knowledge">
    <div class="top">
      <h1 class="title">空气质量小知识</h1>
    </div>
    <div class="main">
      <div class="left">
        <p>-- 空气质量指数(AQI)标准是什么?</p>
        <table class="knowledge-table" width="100%">
          <tr>
            <th width="110">空气质量指数</th>
            <th width="110">空气质量状况</th>
            <th width="210">对健康影响情况</th>
            <th width="210">建议采取的措施</th>
          </tr>
          <tr>
            <td>0-50</td>
            <td><span style="color: #a3d765;">优</span></td>
            <td class="table-text">空气质量令人满意,基本无空气污染,对健康没有危害。</td>
            <td class="table-text">各类人群可多参加户外活动,多呼吸一下清新的空气。</td>
          </tr>
          <tr>
            <td>51-100</td>
            <td><span style="color: #f0cc35;">良</span></td>
            <td class="table-text">除少数对某些污染物特别敏感的人群外,不会对人体健康产生危害。</td>
            <td class="table-text">除少数对某些污染物特别容易过敏的人群外,其他人群可以正常进行室外活动。</td>
          </tr>
          <tr>
            <td>101-150</td>
            <td><span style="color: #f0b835;">轻度</span></td>
            <td class="table-text">敏感人群症状会有轻度加剧,对健康人群没有明显影响。</td>
            <td class="table-text">儿童、老年人及心脏病、呼吸系统疾病患者应尽量减少体力消耗大的户外活动。</td>
          </tr>
          <tr>
            <td>151-200</td>
            <td><span style="color: #f0b835;">中度</span></td>
            <td class="table-text">敏感人群症状进一步加剧,可能对健康人群的心脏、呼吸系统有影响。</td>
            <td class="table-text">儿童、老年人及心脏病、呼吸系统疾病患者应尽量减少外出,停留在室内,一般人群应适量减少户外运动。</td>
          </tr>
          <tr>
            <td>201-300</td>
            <td><span style="color: #f03535;">重度</span></td>
            <td class="table-text">空气状况很差,会对每个人的健康都产生比较严重的危害。</td>
            <td class="table-text">儿童、老年人及心脏病、肺病患者应停留在室内,停止户外运动,一般人群尽量减少户外运动。</td>
          </tr>
          <tr>
            <td>>300</td>
            <td><span style="color: #f03535;">严重</span></td>
            <td class="table-text">空气状况极差,所有人的健康都会受到严重危害。</td>
            <td class="table-text">儿童、老年人和病人应停留在室内,避免体力消耗,除有特殊需要的人群外,一般人群尽量不要停留在室外。</td>
          </tr>
        </table>
      </div>
      <div class="right">
        <div class="questionbox">
          <p>-- 空气质量较差会有什么影响?</p>
          <span>恶劣的空气质量可能对人们的健康造成负面影响，包括呼吸道问题、心血管疾病和其他健康问题。长期暴露在污染的空气中可能会增加患上某些慢性疾病的风险。</span>
        </div>
        <div class="questionbox">
          <p>-- 什么是PM2.5和PM10?</p>
          <span>PM2.5是指大气中直径小于或等于2.5微米的颗粒物,也称为可入肺颗粒物。被吸入人体后会直接进入支气管,干扰肺部的气体交换,引发哮喘、支气管炎等方面的疾病。PM10是直径小于等于10微米的可吸入颗粒物,能够进入上呼吸道,但部分可通过痰液等排出体外,另外也会被鼻腔内部的绒毛阻挡,对人体健康危害相对较小。</span>
        </div>
        <div class="questionbox">
          <p>-- 空气质量指数(AQI)与PM2.5的关系是什么?</p>
          <span>空气质量指数(AQI)的取值方法为:在PM2.5,PM10等六种主要污染物中,根据其浓度分别计算对应AQI值,然后取数值最大的那个作为最终报告的AQI值;PM2.5指空气中直径≤2.5微米的颗粒物,其数值一般来源于实测浓度值并计算得出。两者的取值途径完全不同,所以我们为了更严谨的呈现出空气质量情况,选择将空气质量指数(AQI)和PM2.5分榜列出。</span>
        </div>
        <div class="questionbox">
          <p>-- N90和N95防护口罩的区别?</p>
          <span>般PM2.5口罩分为3个等级,90%、95%、99%,防护等级越高。N90可过滤90%的PM2.5,N95可过滤95%的PM2.5。等级越高相对呼吸也越困难。N90可基本满足需求。</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped lang="less">
  .knowledge {
    width: 1160px;
    margin: 20px auto;
    color: #344665;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, .2);
    padding: 0 20px;

    .top {
      height: 20px;
      padding: 20px 0;

      .title {
        font-size: 18px;
        font-weight: 400;
        height: 20px;
        line-height: 20px;
        float: left;
      }

      .title::before {
        content: '';
        float: left;
        margin-top: 9px;
        margin-right: 10px;
        width: 7px;
        height: 7px;
        background: #344665;
        border-radius: 50%;
      }
    }

    .main {
      padding: 0 0 20px;
      display: flex;
      justify-content: space-around;

      .left {
        p {
          margin-bottom: 5px;
        }

        .knowledge-table {
          width: 690px;
          border-left: 1px solid #999;
          border-top: 1px solid #999;
          text-align: center;

          td {
            padding: 10px;
            border-right: 1px solid #999;
            border-bottom: 1px solid #999;
          }

          th {
            padding: 10px;
            border-right: 1px solid #999;
            border-bottom: 1px solid #999;
            background-color: #ffffff9a;
          }

          .table-text {
            text-align: start;
            font-size: 12px;
          }
        }
      }

      .right {
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .questionbox {
          span {
            font-size: 12px;
            opacity: 0.6;
          }
        }
      }
    }
  }
</style>