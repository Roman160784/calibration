import React from 'react';
import classes from './Certificate.module.css'
import bgca from '../../Logo/bgca.jpg'
import certif from '../../Logo/certif.png'
import iso from '../../Logo/iso.png'
import { useSelector } from 'react-redux';
import { selectReport } from '../../redux/selectors/reportSelector';
import { selectCAlculationData } from '../../redux/selectors/calculationSelector';


export const Certificate = () => {

    const report = useSelector(selectReport)
    const calculationData = useSelector(selectCAlculationData)

    return (
        <div>
            <div className={classes.page}>
                <div className={classes.title}>
                    <div>РЕСПУБЛИКАНСКОЕ УНИТАРНОЕ ПРЕДПРИЯТИЕ </div>
                    <div>«ГОМЕЛЬСКИЙ ЦЕНТР СТАНДАРТИЗАЦИИ, МЕТРОЛОГИИ И СЕРТИФИКАЦИИ»</div>
                    <div>ОТДЕЛ МЕТРОЛОГИИ</div>
                    <div className={classes.certifBlock}>
                        <img className={classes.bgca} src={bgca} alt="BGCA" />
                        <img className={classes.certif} src={certif} alt="certif" />
                        <img className={classes.iso} src={iso} alt="iso" />
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
                    <table border={1}>
                        <tr className={classes.tableStandard}>
                            <td> Наименование </td>
                            <td> Тип</td>
                            <td> Зав. №</td>
                            <td>Дата метрологической оценки</td>
                        </tr>
                        <tr className={classes.tableStandard}>
                            <td>{report.standard.standardName}</td>
                            <td>{report.standard.standardType}</td>
                            <td>{report.standard.standardNumber}</td>
                            <td>{report.standard.calibrationDate}</td>
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
                <div className={classes.tableBlock}>
                    <table  className={classes.tableBlock} border={1}>
                        <tr>
                            <td className={classes.tableBlock}>Калибруемая точка</td>
                            <td className={classes.tableBlock}>Испытательное напряжение</td>
                            <td className={classes.tableBlock}>Полученное значение</td>
                            <td className={classes.tableBlock}>Абсолютная погрешность</td>
                            <td className={classes.tableBlock}> Предел основной абсолютной погрешности</td>
                            <td className={classes.tableBlock}>Расширенная неопределенность</td>
                            <td className={classes.tableBlock}>Доверительная вероятность, %</td>
                            <td className={classes.tableBlock}>Коэффициент охвата</td>
                            <td className={classes.tableBlock}>Распределение</td>
                        </tr>
                        {
                            calculationData.result.map(r => {
                                return(
                                    <tr key={r.id}>
                                        <td className={classes.tableBlock}>{r.calibrationDot} MOм</td>
                                        <td className={classes.tableBlock}>{r.testVoltage}</td>
                                        <td className={classes.tableBlock}>{r.calibrationMiddleValue} MOм</td>
                                        <td className={classes.tableBlock}>{r.error} MOм</td>
                                        <td className={classes.tableBlock}> ± {r.permissibleValue} MOм</td>
                                        <td className={classes.tableBlock}> {r.expandedUncertainty} MOм</td>
                                        <td className={classes.tableBlock}>{r.probability}</td>
                                        <td className={classes.tableBlock}>{r.coefficient}</td>
                                        <td className={classes.tableBlock}>{r.coefficient === 2 ? 'нормальное' : 'прямоугольное'}</td>
                                    </tr>
                                )
                            })
                        }

                    </table>
                </div>
                <div className={classes.gum}>
                Расширенная неопределённость получена путём уножения суммарной стандартной непределённости на коэффициент охвата k соответствующий уровню доверия, роиблизительно равному 95% при допущении вида распределения, указанного в таблице. Оценивание неопределённости проведено в соответствии с "Руководством по выражению неопределённости в измерениях {`(GUM)`}"
                </div>
                <div className={classes.result}>
                Заключение о соответствии:
                <span> {report.calibrationObject}</span>
                <span> № {report.serialNumber}</span>
                <div>
                в калибруемых точках соответствует  обязательным метрологическим требованиям в соответствии с описанием типа {`(при установлении соответствия применно правило принятия решения, основанное на простой приёмке в соответствии с СТБ ISO/IEC Guide 98-4-2019)`}
                </div>
                </div>
                <div className={classes.interval}>
                Межкалибровочный интервал не должен превышать 12 месяцев
                </div>
                <div className={classes.engineer}>
                Подпись лица, выполнившего калибровку:  
                <span className={classes.name}>{report.engineer}</span>
                <div className={classes.nameDisv}>{`(Ф.И.О., должность)`}</div>
                </div>
                <div className={classes.engineer}>
                Дополнительная информация: протокол калибровки № {report.reportNumber}
                </div>
                <div className={classes.adressAgain}>
                {`ул.Лепешинского,1, 246015, г.Гомель,  +375 232 26-33-03, +375 232 26-33-25 факс,`}
                </div>
                <div className={classes.site}>
                {`mail@gomelcsms.by, www.gomelcsms.by`}
                </div>
                <div className={classes.site}>
                {`(адрес лаборатории, телефон, факс, эл. почта, web-сайт)`}
                </div>
                <div className={classes.engineer}>
                Место проведения калибровки:  
                <span> {report.calibrarionPlace}</span>
                <div className={classes.labAdress}>246015, г. Гомель, ул. Лепешинского, 1</div>
                </div>
            </div>
        </div>
    )
}