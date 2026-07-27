(function() {
  var style = getComputedStyle(document.documentElement);
  var accent = style.getPropertyValue('--accent').trim() || '#2d8a6e';
  var accent2 = style.getPropertyValue('--accent2').trim() || '#e07a3e';
  var ink = style.getPropertyValue('--ink').trim() || '#2a2e2b';
  var muted = style.getPropertyValue('--muted').trim() || '#6e7a72';
  var rule = style.getPropertyValue('--rule').trim() || 'rgba(45,138,110,0.12)';
  var bg2 = style.getPropertyValue('--bg2').trim() || 'rgba(255,255,255,0.72)';

  var chartInstance = null;

  /* 兼容新旧数据结构 */
  function getWeightVal(w) { return w.morning || w.bedtime || w.weight || 0; }

  window.initWeightChart = function() {
    var el = document.getElementById('weight-chart');
    if (!el) return;

    /* 读取新存储键，兼容旧键 */
    var weights = [];
    try {
      weights = JSON.parse(localStorage.getItem('wb_weights_v2')) || JSON.parse(localStorage.getItem('wb_weights')) || [];
    } catch(e) {}

    if (weights.length === 0) {
      el.innerHTML = '<p style="text-align:center;color:' + muted + ';padding:40px 0;">暂无体重记录，请在左侧添加</p>';
      return;
    }

    // Sort by date ascending
    weights.sort(function(a, b) { return a.date.localeCompare(b.date); });

    var dates = weights.map(function(w) { return w.date; });
    var morningVals = weights.map(function(w) { return w.morning || null; });
    var bedtimeVals = weights.map(function(w) { return w.bedtime || null; });

    if (chartInstance) {
      chartInstance.dispose();
    }
    chartInstance = echarts.init(el, null, { renderer: 'svg' });

    var series = [];
    var hasMorning = morningVals.some(function(v) { return v !== null; });
    var hasBedtime = bedtimeVals.some(function(v) { return v !== null; });

    if (hasMorning) {
      series.push({
        name: '晨起空腹',
        type: 'line',
        data: morningVals,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        connectNulls: true,
        lineStyle: { width: 3, color: accent },
        itemStyle: { color: accent, borderColor: '#fff', borderWidth: 2 },
        areaStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: accent + '30' },
              { offset: 1, color: accent + '05' }
            ]
          }
        }
      });
    }

    if (hasBedtime) {
      series.push({
        name: '睡前',
        type: 'line',
        data: bedtimeVals,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        connectNulls: true,
        lineStyle: { width: 3, color: accent2 },
        itemStyle: { color: accent2, borderColor: '#fff', borderWidth: 2 }
      });
    }

    /* 如果既没有晨起也没有睡前，回退到旧数据结构 */
    if (series.length === 0) {
      var vals = weights.map(function(w) { return w.weight || 0; });
      series.push({
        name: '体重',
        type: 'line',
        data: vals,
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3, color: accent },
        itemStyle: { color: accent, borderColor: '#fff', borderWidth: 2 },
        areaStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: accent + '30' },
              { offset: 1, color: accent + '05' }
            ]
          }
        }
      });
    }

    chartInstance.setOption({
      animation: false,
      tooltip: {
        trigger: 'axis',
        appendToBody: true,
        backgroundColor: 'rgba(255,255,255,0.92)',
        borderColor: rule,
        textStyle: { color: ink }
      },
      legend: {
        textStyle: { color: muted },
        bottom: 0
      },
      grid: {
        left: '3%', right: '4%', bottom: '12%', top: '10%', containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: dates,
        axisLine: { lineStyle: { color: rule } },
        axisLabel: { color: muted }
      },
      yAxis: {
        type: 'value',
        scale: true,
        axisLine: { show: false },
        splitLine: { lineStyle: { color: rule, type: 'dashed' } },
        axisLabel: { color: muted, formatter: '{value} kg' }
      },
      series: series
    });

    window.addEventListener('resize', function() { chartInstance && chartInstance.resize(); });
  };

  // Auto-init if health tab is visible on load
  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('health') && document.getElementById('health').classList.contains('active')) {
      setTimeout(window.initWeightChart, 100);
    }
  });
})();
