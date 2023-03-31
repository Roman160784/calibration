import React from 'react';
import classes from './Certificate.module.css'
import bgca from '../../Logo/bgca.jpg'
import certif from '../../Logo/certif.png'
import iso from '../../Logo/iso.png'
import { useSelector } from 'react-redux';
import { selectReport } from '../../redux/selectors/reportSelector';


export const Certificate = () => {

    const report = useSelector(selectReport)

    return(
        <div>
            <div className={classes.page}>
                <div className={classes.title}>
                <div>РЕСПУБЛИКАНСКОЕ УНИТАРНОЕ ПРЕДПРИЯТИЕ </div>
                <div>«ГОМЕЛЬСКИЙ ЦЕНТР СТАНДАРТИЗАЦИИ, МЕТРОЛОГИИ И СЕРТИФИКАЦИИ»</div>
                <div>ОТДЕЛ МЕТРОЛОГИИ</div>
                <div className={classes.certifBlock}>
                    <img className={classes.bgca} src={bgca} alt="BGCA" />
                    <img className={classes.certif} src={certif} alt="certif" />
                    <img  className={classes.iso} src={iso} alt="iso" />
                </div>
                <h1>Свидетельство о калибровке</h1>
                </div>
                <div className={classes.pageCount}>Страница 1 из 2</div>
                <div className={classes.certifNum}>
                    <span className={classes.sertificareteNumber}>Номер свидетельства:  </span>
                    <span className={classes.stigma}> {report.stigma}</span>
                    <span className={classes.calibrationTime}>Дата калибровки: </span>
                    <span className={classes.calibrationDate}>{report.calibrationDate} </span>
                </div>
                <div className={classes.calibrationObjectBlock}> 
                    <span className={classes.calObject}>Объект калибровки:</span>
                    <span className={classes.claibrationObject}>{report.calibrationObject}</span>
                    <span className={classes.serialNum}>зав.№ </span>
                    <span className={classes.serialNumber}>{report.serialNumber}</span>
                </div>
                <div className={classes.diskriptionBlock}>
                    <span className={classes.objectDicription}>{`(наименование эталона/средства измерения/идентификация)`} </span>
                </div>
                <div className={classes.ownerBlock}>
                    <span className={classes.owmer}>Владелец средства измерения: </span>
                    <span className={classes.custumer}>{report.customer}</span>
                    <div className={classes.adres}>Адрес заказчика: 
                    <span className={classes.ownerAdres}>{report.adresCustumer}</span>
                    </div>
                    <div className={classes.owmerInfo}>{`(информация о заказчике, адрес)`}</div>
                </div>
                <div className={classes.stigmaBlock}>
                    <span>Калибровочное клеймо-наклейка:</span>
                    <span className={classes.stigmaIn}>{report.stigma}</span>
                </div>
                <div className={classes.methodBlock}>
                    <span>Метод калибровки:</span>
                    <span className={classes.method}>{report.method}</span>
                    <div className={classes.mathodDiscription}>{`(наименование метода/идентификация)`}</div>
                </div>
                <div className={classes.attantionBlock}>
                    <div> Все измерения имеют прослеживаемость к единицам Международной системы SI,</div>
                    <div> которые воспроизводятся национальными эталонами национальных метрологических {`(НМИ)`}</div>
                    <div>Данное свидетельство может быть воспроизведено только полностью. Любая</div>
                    <div>публикация или частичное воспризведениесодержания свидетельства возможны с письменного</div>
                    <div> разрешения лаборатории, выдавшей свидетельство.</div>
                </div>
                <div className={classes.signBlock}>
                    <span>Подпись</span>
                    <span className={classes.sign}>{report.boss}</span>
                    <span className={classes.date}>Дата выдачи:</span>
                    <span className={classes.dateNum}>{report.calibrationDate}</span>
                </div>
                <div className={classes.fio}>{`(Ф.И.О. и должность)`} </div>
            </div>
            <div className={classes.page}>
                <div className={classes.sert}>Свидетельство о калибровке</div>
                <div className={classes.sert}>
                    <span>Номер свидетельства:</span>
                    <span className={classes.stigmaPage}>{report.stigma}</span>
                    <span className={classes.pagePageTwo}>Страница 2 из 2</span>
                </div>
                <div className={classes.sert}>
                    <span className={classes.stigmaPage}>Калибровка выполнена с помощью:</span>
                    <span className={classes.pagePageTwo}>Таблица 1</span>
                </div>
                <div className={classes.tableStandardBlock}>
                    <table  border={1}>
                    <tr className={classes.tableStandard}>
                        <td> Наименование </td>
                        <td> Тип</td>
                        <td> Зав. №</td>
                        <td>Дата метрологической оценки</td>
                    </tr>
                    <tr className={classes.tableStandard}>
                        <td>{report.standard.standardName}</td>
                        <td>{ report.standard.standardType}</td>
                        <td>{ report.standard.standardNumber}</td>
                        <td>{ report.standard.calibrationDate}</td>
                    </tr>
                    </table>
                </div>
                <div className={classes.looking}>
                Обеспечивается прослеживаемость результатов измерений до Национального эталона электрического сопротивления - Ома НЭ РБ 29-16
                </div>
                <div className={classes.conditionsBlock}>
                    <span className={classes.conditions}>Условия калибровки: </span>
                    <span className={classes.tempreture}>Температура окружающего воздуха - °С</span>
                    <span className={classes.resultT}>{report.calibrationConditions.temperature}</span>
                    <div className={classes.frequency}> Относительная влажность воздуха  - %
                        <span className={classes.resultT} >{report.calibrationConditions.frequency}</span>
                    </div>
                    <div className={classes.pressure}> Атмосферное давление - кПа
                        <span className={classes.resultP}> {report.calibrationConditions.pressure}</span>
                    </div>
                    <div className={classes.voltage}> Напряжение питающей сети - B
                        <span className={classes.resultV}>{report.calibrationConditions.supplyVoltage}</span>
                    </div>
                    <div className={classes.pressure}>Частота питающей сети - Гц
                        <span className={classes.resultF}>{report.calibrationConditions.frequency}</span>
                    </div>
                </div>
                <div className={classes.stigmaPage}>Результаты калибровки, включая неопределенность:
                    <span className={classes.tab2}> Таблица 2</span>
                </div>
                
            </div>
        </div>
    )
}