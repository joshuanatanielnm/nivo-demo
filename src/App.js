import { ResponsiveBar } from '@nivo/bar'
import './App.css'
import { useTheme } from '@nivo/core'
import { TooltipWrapper } from '@nivo/tooltip'

function App() {
  const dataBeras = [
    {
      value: 11700,
      name: 'Jawa Timur',
    },
    {
      value: 11750,
      name: 'Bali',
    },
    {
      value: 11850,
      name: 'Jambi',
    },
    {
      value: 12400,
      name: 'Sulawesi Utara',
    },
    {
      value: 12500,
      name: 'Aceh',
    },
    {
      value: 12800,
      name: 'Kalimantan Barat',
    },
    {
      value: 12800,
      name: 'Kepulauan Bangka Belitung',
    },
    {
      value: 12850,
      name: 'Kalimantan Utara',
    },
    {
      value: 13000,
      name: 'Kalimantan Timur',
    },
    {
      value: 13100,
      name: 'Sulawesi Tengah',
    },
    {
      value: 13100,
      name: 'Sumatera Utara',
    },
    {
      value: 13150,
      name: 'Papua Barat',
    },
  ]

  function numberWithCommas(x) {
    return x.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '1,')
  }

  function CustomBarTooltip(input) {
    const theme = useTheme()
    const text = `${input.data.indexValue}: Rp${numberWithCommas(
      input.data.value
    )}`
    return (
      <TooltipWrapper anchor={'top'} position={[0, 0]}>
        <div
          style={{
            boxShadow: '0 0 40px rgba(0,0,0,10%)',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              boxShadow: '5px 1px 1px 10px #fffff',
              padding: '10px',
            }}
          >
            <div style={theme.tooltip.basic}>
              <span style={{ fontSize: '14px', fontWeight: 'bold' }}>
                {text.replace(/_/g, ' ')}
              </span>
            </div>
          </div>
        </div>
      </TooltipWrapper>
    )
  }

  return (
    <div className='app'>
      <h2>Perbandingan harga beras</h2>
      <ResponsiveBar
        data={dataBeras}
        keys={['value']}
        indexBy='name'
        margin={{ top: 0, right: 130, bottom: 50, left: 200 }}
        padding={0.2}
        label={(d) => `Rp ${numberWithCommas(d.value)}`}
        layout='horizontal'
        colors={'#2c3166'}
        tooltip={(input) => {
          return <CustomBarTooltip data={input} />
        }}
        labelTextColor='white'
        theme={{
          labels: { text: { fontWeight: 'bold' } },
        }}
      />
    </div>
  )
}

export default App
