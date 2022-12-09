interface statTabInterface {
  stat_value: number,
  stat_name: string,
  limit:number,
}

const whichStat: any = (stat: any) => {
  switch (stat) {
    case 'str':
      return 'linear-gradient(90deg, #C74A54 0%, #FF3F4E 100%)'
    case 'dex':
      return 'linear-gradient(90deg, #A34EDF 0%, #EE87FF 100%)'
    case 'vit':
      return 'linear-gradient(90deg, #5F61FF 0%, #49B3FF 100%)'
    case 'int':
      return 'linear-gradient(90deg, #5FD9FF 0%, #7CFFF7 100%)'
    case 'krm':
      return 'linear-gradient(90deg, #65D6CB 0%, #5FFFCF 100%)'
  }
}

export const StatTab = ({ stat_value, stat_name,limit }: statTabInterface) => (
  <div className={'w-full h-5 deactive-gradient rounded-full transition-all'}>
    <div style={{ width: `${stat_value * 100/limit}%`, background: `${whichStat(stat_name)}` }} className={'h-full rounded-full flex justify-end items-center transition-all duration-500 ease-in-out'}>
      <div className={'w-4 h-4 rounded-full bg-white mr-0.5 flex justify-center items-center'}>
        <p className={'font-bold text-xs'}>{stat_value}</p>
      </div>
    </div>
  </div>
)
