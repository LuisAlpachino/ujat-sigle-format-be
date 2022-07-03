const singleFormatQuery = `SELECT
TABLE_B.partida,
TABLE_A.APROBADO,
TABLE_B.MODIFICADO,
TABLE_G.RECAUDADO,
TABLE_C.COMPROMETIDO,
TABLE_D.DEVENGADO,
TABLE_E.EJERCIDO,
TABLE_F.PAGADO
FROM
(
SELECT
    UJAT."cat_cog".PIDCOG AS partida,
  SUM( fondo.MONTO ) AS APROBADO
FROM
  UJAT."fondo_ordinario" fondo
  INNER JOIN UJAT."cat_cog" ON UJAT."cat_cog".IDCOG = fondo.SCTA
WHERE
  fondo.MES BETWEEN :monthStart and :monthEnd
    AND fondo.ANIO = :yearStart
  AND ( fondo.CNTA = '821' AND fondo.TMOV = 'A' )
GROUP BY
  fondo.CNTA,
  UJAT."cat_cog".PIDCOG
ORDER BY
  UJAT."cat_cog".PIDCOG
) TABLE_A RIGHT OUTER
JOIN (
SELECT
  UJAT."cat_cog".PIDCOG AS partida,
  SUM( fondo.MONTO ) AS MODIFICADO
FROM
  UJAT."fondo_ordinario" fondo
  INNER JOIN UJAT."cat_cog" ON UJAT."cat_cog".IDCOG = fondo.SCTA
WHERE
  fondo.MES BETWEEN :monthStart and :monthEnd
    AND fondo.ANIO = :yearStart
  AND ( fondo.CNTA = '822' AND fondo.TMOV = 'C' )
GROUP BY
  fondo.CNTA,
  UJAT."cat_cog".PIDCOG
ORDER BY
  UJAT."cat_cog".PIDCOG
) TABLE_B ON TABLE_A.partida = TABLE_B.partida LEFT OUTER
JOIN (
SELECT
  UJAT."cat_cog".PIDCOG AS partida,
  SUM( fondo.MONTO ) AS COMPROMETIDO
FROM
  UJAT."fondo_ordinario" fondo
  INNER JOIN UJAT."cat_cog" ON UJAT."cat_cog".IDCOG = fondo.SCTA
WHERE
  fondo.MES BETWEEN :monthStart and :monthEnd
    AND fondo.ANIO = :yearStart
  AND ( fondo.CNTA = '824' AND fondo.TMOV = 'C' )
GROUP BY
  fondo.CNTA,
  UJAT."cat_cog".PIDCOG
ORDER BY
  UJAT."cat_cog".PIDCOG
) TABLE_C ON TABLE_B.partida = TABLE_C.partida LEFT OUTER
JOIN (
SELECT
  UJAT."cat_cog".PIDCOG AS partida,
  SUM( fondo.MONTO ) AS DEVENGADO
FROM
  UJAT."fondo_ordinario" fondo
  INNER JOIN UJAT."cat_cog" ON UJAT."cat_cog".IDCOG = fondo.SCTA
WHERE
  fondo.MES BETWEEN :monthStart and :monthEnd
    AND fondo.ANIO = :yearStart
  AND ( fondo.CNTA = '825' AND fondo.TMOV = 'C' )
GROUP BY
  fondo.CNTA,
  UJAT."cat_cog".PIDCOG
ORDER BY
  UJAT."cat_cog".PIDCOG
) TABLE_D ON TABLE_B.partida = TABLE_D.partida LEFT OUTER
JOIN (
SELECT
  UJAT."cat_cog".PIDCOG AS partida,
  SUM( fondo.MONTO ) AS EJERCIDO
FROM
  UJAT."fondo_ordinario" fondo
  INNER JOIN UJAT."cat_cog" ON UJAT."cat_cog".IDCOG = fondo.SCTA
WHERE
  fondo.MES BETWEEN :monthStart and :monthEnd
    AND fondo.ANIO = :yearStart
  AND ( fondo.CNTA = '826' AND fondo.TMOV = 'C' )
GROUP BY
  fondo.CNTA,
  UJAT."cat_cog".PIDCOG
ORDER BY
  UJAT."cat_cog".PIDCOG
) TABLE_E ON TABLE_B.partida = TABLE_E.partida LEFT OUTER
JOIN (
SELECT
  UJAT."cat_cog".PIDCOG AS partida,
  SUM( fondo.MONTO ) AS PAGADO
FROM
  UJAT."fondo_ordinario" fondo
  INNER JOIN UJAT."cat_cog" ON UJAT."cat_cog".IDCOG = fondo.SCTA
WHERE
  fondo.MES BETWEEN :monthStart and :monthEnd
    AND fondo.ANIO = :yearStart
  AND ( fondo.CNTA = '827' AND fondo.TMOV = 'C' )
GROUP BY
  fondo.CNTA,
  UJAT."cat_cog".PIDCOG
ORDER BY
  UJAT."cat_cog".PIDCOG
) TABLE_F ON TABLE_B.partida = TABLE_F.partida LEFT OUTER
JOIN (
SELECT h.PIDCOG AS partida, SUM(g.MODIF_823 + g.APROB_821) as RECAUDADO
FROM UJAT."disp_presupuestal" g
    INNER JOIN UJAT."cat_cog" h  on g.CLASOBGAST = h.IDCOG
    WHERE  g.MES BETWEEN :monthStart AND :monthEnd
    AND g.ANIO = :yearStart
GROUP BY h.PIDCOG ORDER BY h.PIDCOG
) TABLE_G ON TABLE_B.partida = TABLE_G.partida`;

export default singleFormatQuery;
